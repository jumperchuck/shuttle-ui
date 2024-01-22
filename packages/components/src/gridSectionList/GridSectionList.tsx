import React, { useEffect, useRef } from 'react';
import { DefaultSectionT, SectionList, SectionListProps } from 'react-native';

import { useLayout } from '../hooks';
import { GridListItemLayout, GridListNodeInfo } from '../gridList/types';
import GridListItem from '../gridList/GridListItem';
import LayoutManager from './LayoutManager';
import {
  GridSectionListData,
  GridSectionListRenderItem,
  GridSectionListRenderNoItem,
} from './types';
import useLayoutManager from './useLayoutManager';

export interface GridSectionListProps<T, SectionT = DefaultSectionT>
  extends Omit<
    SectionListProps<T, SectionT>,
    | 'sections'
    | 'renderItem'
    | 'getItemLayout'
    | 'renderSectionHeader'
    | 'renderSectionFooter'
  > {
  forwardedRef?: React.LegacyRef<SectionList>;
  sections: GridSectionListData<T, SectionT>[];
  row: number;
  col: number;
  spacing?: number;
  pageWidth?: number;
  pageHeight?: number;
  cellWidth?: number | ((pageWidth: number) => number);
  cellHeight?: number | ((pageHeight: number) => number);
  layoutManager?: LayoutManager<T, SectionT>;
  renderItem: GridSectionListRenderItem<T, SectionT>;
  renderNoItem?: GridSectionListRenderNoItem<T, SectionT>;
  getItemLayout?: (data: T[], index: number) => GridListItemLayout;
  renderSectionHeader?: (info: {
    section: GridSectionListData<T, SectionT>;
  }) => React.ReactElement | null;
  getSectionHeaderLayout?: (section: GridSectionListData<T, SectionT>) => {
    length: number;
  };
  renderSectionFooter?: (info: {
    section: GridSectionListData<T, SectionT>;
  }) => React.ReactElement | null;
  getSectionFooterLayout?: (section: GridSectionListData<T, SectionT>) => {
    length: number;
  };
}

const GridSectionList = <T, SectionT = DefaultSectionT>(
  props: GridSectionListProps<T, SectionT>,
) => {
  const {
    forwardedRef,
    sections,
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
    renderSectionHeader,
    getSectionHeaderLayout,
    renderSectionFooter,
    getSectionFooterLayout,
    horizontal,
    ...rest
  } = props;

  const {
    width: pageWidth,
    height: pageHeight,
    onLayout,
  } = useLayout({ width: initPageWidth, height: initPageHeight });

  const fnRef = useRef({
    renderItem,
    renderNoItem,
    getItemLayout,
    getSectionHeaderLayout,
    getSectionFooterLayout,
  });
  fnRef.current.renderItem = renderItem;
  fnRef.current.renderNoItem = renderNoItem;
  fnRef.current.getItemLayout = getItemLayout;
  fnRef.current.getSectionHeaderLayout = getSectionHeaderLayout;
  fnRef.current.getSectionFooterLayout = getSectionFooterLayout;

  if (renderSectionHeader && !fnRef.current.getSectionHeaderLayout) {
    fnRef.current.getSectionHeaderLayout = () => ({ length: 0 });
  }
  if (renderSectionFooter && !fnRef.current.getSectionFooterLayout) {
    fnRef.current.getSectionFooterLayout = () => ({ length: 0 });
  }

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
    layoutManager.renderItem = fnRef.current.renderItem;
    layoutManager.renderNoItem = fnRef.current.renderNoItem;
    layoutManager.getItemLayout =
      fnRef.current.getItemLayout ?? (() => ({ row: 1, col: 1 }));
    layoutManager.getSectionHeaderLayout = fnRef.current.getSectionHeaderLayout;
    layoutManager.getSectionFooterLayout = fnRef.current.getSectionFooterLayout;
    layoutManager.nodeSections = [];
    layoutManager.indexLayouts = [];

    if (cellWidth <= 0 || cellHeight <= 0 || pageWidth <= 0 || pageHeight <= 0) {
      return;
    }

    sections.forEach((section) => {
      layoutManager.addSection(section);
    });

    layoutManager.calculateNodeSections();
  }, [
    row,
    col,
    cellWidth,
    cellHeight,
    pageWidth,
    pageHeight,
    spacing,
    horizontal,
    sections,
    layoutManager,
  ]);

  return (
    // @ts-ignore
    <SectionList<
      GridListNodeInfo,
      Omit<GridSectionListData<T, SectionT>, 'data'> & {
        sectionData: T[];
      }
    >
      ref={forwardedRef}
      sections={layoutManager.nodeSections}
      onLayout={onLayout}
      initialNumToRender={layoutManager.initialNumToRender}
      viewabilityConfig={{
        waitForInteraction: true,
      }}
      horizontal={horizontal}
      removeClippedSubviews
      {...rest}
      renderSectionHeader={
        renderSectionHeader
          ? ({ section }) =>
              renderSectionHeader({
                section: {
                  ...section,
                  data: section.sectionData,
                } as any,
              })
          : undefined
      }
      renderSectionFooter={
        renderSectionFooter
          ? ({ section }) =>
              renderSectionFooter({
                section: {
                  ...section,
                  data: section.sectionData,
                } as any,
              })
          : undefined
      }
      renderItem={({ item, section }) => {
        return (
          <GridListItem<T>
            flex={-1}
            data={section.sectionData}
            nodes={item.child}
            style={item.style}
            renderItem={section.renderGridItem}
            renderNoItem={section.renderGridNoItem}
            spacing={spacing}
            paddingY={horizontal ? spacing : 0}
            paddingX={horizontal ? 0 : spacing}
          />
        );
      }}
      getItemLayout={(_, index) =>
        layoutManager.indexLayouts[index] || { length: 0, offset: 0, index }
      }
    />
  );
};

export default GridSectionList;
