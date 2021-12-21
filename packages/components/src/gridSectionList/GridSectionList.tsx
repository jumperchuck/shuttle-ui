import React, { useMemo, useRef } from 'react';
import { DefaultSectionT, SectionList, SectionListProps } from 'react-native';
import { useLayout } from '@shuttle-ui/utils';

import { GridListItemLayout, GridListNodeInfo } from '../gridList/types';
import GridListItem from '../gridList/GridListItem';
import LayoutManager from './LayoutManager';
import {
  GridSectionListData,
  GridSectionListRenderItem,
  GridSectionListRenderNoItem,
} from './types';

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
  LayoutManager?: typeof LayoutManager;
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
    LayoutManager: LM = LayoutManager,
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

  const layoutManager = useMemo(() => {
    const manager =
      lm ||
      new LM(
        row,
        col,
        cellWidth,
        cellHeight,
        pageWidth,
        pageHeight,
        spacing,
        !!horizontal,
        fnRef.current.renderItem,
        fnRef.current.renderNoItem,
        fnRef.current.getItemLayout ?? (() => ({ row: 1, col: 1 })),
        fnRef.current.getSectionHeaderLayout,
        fnRef.current.getSectionFooterLayout,
      );
    manager.row = row;
    manager.col = col;
    manager.cellWidth = cellWidth;
    manager.cellHeight = cellHeight;
    manager.pageWidth = pageWidth;
    manager.pageHeight = pageHeight;
    manager.spacing = spacing;
    manager.horizontal = !!horizontal;
    manager.initialNumToRender = 0;
    manager.renderItem = fnRef.current.renderItem;
    manager.renderNoItem = fnRef.current.renderNoItem;
    manager.getItemLayout = fnRef.current.getItemLayout ?? (() => ({ row: 1, col: 1 }));
    manager.getSectionHeaderLayout = fnRef.current.getSectionHeaderLayout;
    manager.getSectionFooterLayout = fnRef.current.getSectionFooterLayout;
    manager.nodeSections = [];
    manager.indexLayouts = [];

    if (cellWidth <= 0 || cellHeight <= 0 || pageWidth <= 0 || pageHeight <= 0) {
      return manager;
    }

    sections.forEach((section) => {
      manager.addSection(section);
    });

    manager.calculateNodeSections();

    return manager;
  }, [
    row,
    col,
    cellWidth,
    cellHeight,
    pageWidth,
    pageHeight,
    spacing,
    horizontal,
    LM,
    lm,
    sections,
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
