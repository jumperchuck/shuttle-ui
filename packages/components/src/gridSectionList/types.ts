import React from 'react';
import { DefaultSectionT, SectionBase } from 'react-native';

import { GridListItemProps } from '../gridList/GridListItem';
import {
  GridListItemLayout,
  GridListNodeInfo,
  GridListRenderItemInfo,
} from '../gridList/types';

export interface GridSectionsBase<T, SectionT = DefaultSectionT>
  extends SectionBase<T, SectionT> {
  data: T[];
  renderGridItem?: GridListItemProps<T>['renderItem'];
  renderGridNoItem?: GridListItemProps<T>['renderNoItem'];
  getGridItemLayout?: (data: T[], index: number) => GridListItemLayout;
  getItemLayout?: (
    data: T[],
    index: number,
  ) => { length: number; offset: number; index: number };
}

export type GridSectionListData<T, SectionT = DefaultSectionT> = GridSectionsBase<
  T,
  SectionT
> &
  SectionT;

export interface GridSectionListRenderItemInfo<T, SectionT = DefaultSectionT>
  extends GridListRenderItemInfo<T> {
  section: GridSectionListData<T, SectionT>;
  sectionIndex: number;
}

export type GridSectionListRenderItem<T, SectionT = DefaultSectionT> = (
  info: GridSectionListRenderItemInfo<T, SectionT>,
  node: GridListNodeInfo<T>,
) => React.ReactNode;

export type GridSectionListRenderNoItem<T, SectionT = DefaultSectionT> = (
  info: { section: GridSectionListData<T, SectionT>; sectionIndex: number },
  node: GridListNodeInfo<T>,
) => React.ReactNode;
