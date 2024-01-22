import React, { useEffect, useRef } from 'react';
import { FlatList, FlatListProps } from 'react-native';

import { useLayout } from '../hooks';
import LayoutManager from './LayoutManager';
import GridListItem, { GridListItemProps } from './GridListItem';
import { GridListItemLayout, GridListNodeInfo } from './types';
import useLayoutManager from './useLayoutManager';

export interface GridListProps<T>
  extends Omit<FlatListProps<GridListNodeInfo>, 'data' | 'renderItem' | 'getItemLayout'> {
  forwardedRef?: React.LegacyRef<FlatList>;
  data: T[];
  row: number;
  col: number;
  spacing?: number;
  pageWidth?: number;
  pageHeight?: number;
  cellWidth?: number | ((pageWidth: number) => number);
  cellHeight?: number | ((pageHeight: number) => number);
  layoutManager?: LayoutManager;
  renderItem: GridListItemProps<T>['renderItem'];
  renderNoItem?: GridListItemProps<T>['renderNoItem'];
  getItemLayout?: (data: T[], index: number) => GridListItemLayout;
}

const GridList = <T,>(props: GridListProps<T>) => {
  const {
    forwardedRef,
    data,
    row,
    col,
    spacing = 0,
    pageWidth: initPageWidth = 0,
    pageHeight: initPageHeight = 0,
    cellWidth: CW = 0,
    cellHeight: CH = 0,
    layoutManager: lm,
    renderItem,
    renderNoItem,
    getItemLayout,
    horizontal,
    ...rest
  } = props;

  const {
    width: pageWidth,
    height: pageHeight,
    onLayout,
  } = useLayout({ width: initPageWidth, height: initPageHeight });

  const getItemLayoutRef = useRef(getItemLayout);
  getItemLayoutRef.current = getItemLayout;

  let cellHeight = (pageHeight - (row + 1) * spacing) / row;
  let cellWidth = (pageWidth - (col + 1) * spacing) / col;

  if (CH) {
    if (typeof CH === 'function') {
      cellHeight = CH(pageHeight);
    } else if (CH < 0) {
      cellHeight = pageHeight * CH;
    } else {
      cellHeight = CH;
    }
  }

  if (CW) {
    if (typeof CW === 'function') {
      cellWidth = CW(pageWidth);
    } else if (CW < 0) {
      cellWidth = pageWidth * CW;
    } else {
      cellWidth = CW;
    }
  }

  const layoutManager = useLayoutManager(lm);

  useEffect(() => {
    layoutManager.row = row;
    layoutManager.col = col;
    layoutManager.cellWidth = cellWidth;
    layoutManager.cellHeight = cellHeight;
    layoutManager.pageWidth = pageWidth;
    layoutManager.pageHeight = pageHeight;
    layoutManager.spacing = spacing;
    layoutManager.horizontal = !!horizontal;
    layoutManager.initialNumToRender = 0;
    layoutManager.nodeData = [];
    layoutManager.topNodes.clear();

    if (cellWidth <= 0 || cellHeight <= 0 || pageWidth <= 0 || pageHeight <= 0) {
      return;
    }

    data.forEach((item, index) => {
      const itemLayout = getItemLayoutRef.current
        ? getItemLayoutRef.current(data, index)
        : { row: 1, col: 1 };
      layoutManager.addItemLayout(itemLayout, index);
    });

    layoutManager.calculateNodeData();
  }, [
    row,
    col,
    cellWidth,
    cellHeight,
    pageWidth,
    pageHeight,
    spacing,
    horizontal,
    data,
    layoutManager,
  ]);

  return (
    <FlatList<GridListNodeInfo>
      ref={forwardedRef}
      data={layoutManager.nodeData}
      onLayout={onLayout}
      initialNumToRender={layoutManager.initialNumToRender}
      viewabilityConfig={{
        waitForInteraction: true,
      }}
      horizontal={horizontal}
      removeClippedSubviews
      {...rest}
      renderItem={({ item }) => {
        return (
          <GridListItem
            flex={-1}
            data={data}
            nodes={item.child}
            style={item.style}
            renderItem={renderItem}
            renderNoItem={renderNoItem}
            spacing={spacing}
            paddingY={horizontal ? spacing : 0}
            paddingX={horizontal ? 0 : spacing}
          />
        );
      }}
      keyExtractor={(item, index) => `${index}`}
      getItemLayout={(_, index) => {
        const listData = _ || layoutManager.nodeData;
        const item = listData[index];
        return {
          length: item.length || 0,
          offset: item.offset || 0,
          index,
        };
      }}
    />
  );
};

export default GridList;
