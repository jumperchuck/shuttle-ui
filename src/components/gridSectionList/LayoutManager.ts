import { DefaultSectionT } from 'react-native';

import GridListLayoutManager from '../gridList/LayoutManager';
import {
  GridListItemLayout as ItemLayout,
  GridListNodeInfo as NodeInfo,
} from '../gridList/types';
import {
  GridSectionListData,
  GridSectionListRenderItem,
  GridSectionListRenderNoItem,
} from './types';

export default class LayoutManager<T, SectionT = DefaultSectionT> {
  constructor(
    row: number,
    col: number,
    cellWidth: number,
    cellHeight: number,
    pageWidth: number,
    pageHeight: number,
    spacing: number,
    horizontal: boolean,
    renderItem: GridSectionListRenderItem<T, SectionT>,
    renderNoItem: GridSectionListRenderNoItem<T, SectionT> | undefined,
    getItemLayout: (data: T[], index: number) => ItemLayout,
    getSectionHeaderLayout:
      | ((section: GridSectionListData<T, SectionT>) => {
          length: number;
        })
      | undefined,
    getSectionFooterLayout:
      | ((section: GridSectionListData<T, SectionT>) => {
          length: number;
        })
      | undefined,
  ) {
    this.row = row;
    this.col = col;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.pageWidth = pageWidth;
    this.pageHeight = pageHeight;
    this.spacing = spacing;
    this.horizontal = horizontal;
    this.renderItem = renderItem;
    this.renderNoItem = renderNoItem;
    this.getItemLayout = getItemLayout;
    this.getSectionHeaderLayout = getSectionHeaderLayout;
    this.getSectionFooterLayout = getSectionFooterLayout;
  }

  /**
   * 一屏最大行数
   */
  row: number;

  /**
   * 一屏最大列数
   */
  col: number;

  /**
   * 单元格宽度
   */
  cellWidth: number;

  /**
   * 单元格高度
   */
  cellHeight: number;

  /**
   * 页面宽度
   */
  pageWidth: number;

  /**
   * 页面高度
   */
  pageHeight: number;

  /**
   * 间隙
   */
  spacing: number;

  /**
   * 是否水平
   */
  horizontal: boolean;

  /**
   * 首屏渲染个数（渲染大于一屏高度）
   */
  initialNumToRender = 0;

  renderItem: GridSectionListRenderItem<T, SectionT>;

  renderNoItem?: GridSectionListRenderNoItem<T, SectionT>;

  getItemLayout: (data: T[], index: number) => ItemLayout;

  getSectionHeaderLayout?: (section: GridSectionListData<T, SectionT>) => {
    length: number;
  };

  getSectionFooterLayout?: (section: GridSectionListData<T, SectionT>) => {
    length: number;
  };

  nodeSections: Array<
    Omit<GridSectionListData<T, SectionT>, 'data'> & {
      data: NodeInfo[];
      sectionData: T[];
      layoutManager: GridListLayoutManager;
      offset: number;
      length: number;
      index: number;
    }
  > = [];

  indexLayouts: { length: number; offset: number; index: number }[] = [];

  addSection(section: GridSectionListData<T, SectionT>) {
    const {
      data,
      key,
      keyExtractor,
      renderGridItem,
      renderGridNoItem,
      getGridItemLayout,
      // TODO 自定义item
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // getItemLayout,
    } = section;

    const sectionIndex = this.nodeSections.length;

    const gridListLayoutManager = new GridListLayoutManager(
      this.row,
      this.col,
      this.cellWidth,
      this.cellHeight,
      this.pageWidth,
      this.pageHeight,
      this.spacing,
      this.horizontal,
    );

    section.data.forEach((item, itemIndex) => {
      const itemLayout = getGridItemLayout
        ? getGridItemLayout(data, itemIndex)
        : this.getItemLayout
        ? this.getItemLayout(data, itemIndex)
        : { row: 1, col: 1 };
      gridListLayoutManager.addItemLayout(itemLayout, itemIndex);
    });

    this.nodeSections.push({
      ...section,
      data: gridListLayoutManager.nodeData,
      sectionData: data,
      key: key || `${sectionIndex}`,
      keyExtractor: keyExtractor || ((item, index) => `${key || sectionIndex}_${index}`),
      layoutManager: gridListLayoutManager,
      renderGridItem: (info, node) => {
        if (renderGridItem) {
          return renderGridItem({ item: data[info.index], index: info.index }, node);
        }
        return this.renderItem(
          { item: data[info.index], index: info.index, section, sectionIndex },
          node,
        );
      },
      renderGridNoItem: renderGridNoItem
        ? renderGridNoItem
        : this.renderNoItem
        ? (node) => this.renderNoItem?.({ section, sectionIndex }, node)
        : undefined,
      getItemLayout: undefined,
      offset: 0,
      length: 0,
      index: sectionIndex,
    });
  }

  addIndexLayout(layout: { offset: number; length: number; index: number }) {
    this.indexLayouts.push(layout);
    if (
      this.initialNumToRender <= 0 &&
      (layout.offset || 0) + (layout.length || 0) >= this.pageHeight
    ) {
      // 大于页面高度
      this.initialNumToRender = this.indexLayouts.length;
    }
  }

  calculateNodeSections() {
    this.initialNumToRender = 0;
    this.indexLayouts = [];
    this.nodeSections.forEach((section, sectionIndex) => {
      const { data, layoutManager } = section;
      /**
       * 没有Header || Footer删除第一个节点的marginTop || marginLeft
       */
      if (
        (!this.getSectionHeaderLayout || !this.getSectionFooterLayout) &&
        sectionIndex > 0
      ) {
        // @ts-ignore
        delete layoutManager.nodeData[0]?.style?.marginTop;
        // @ts-ignore
        delete layoutManager.nodeData[0]?.style?.marginLeft;
      }
      let preLayout = this.indexLayouts[this.indexLayouts.length - 1];
      /**
       * 计算SectionOffset
       */
      section.offset = preLayout ? preLayout.length + preLayout.offset : 0;
      /**
       * 计算SectionHeader
       */
      const headerLength = this.getSectionHeaderLayout
        ? this.getSectionHeaderLayout({
            ...section,
            data: section.sectionData,
          } as any).length
        : 0;
      this.addIndexLayout({
        length: headerLength,
        offset: preLayout ? preLayout.length + preLayout.offset : 0,
        index: this.indexLayouts.length,
      });
      /**
       * 计算节点长度和位置
       */
      let nodeLength = 0;
      data.forEach((item, itemIndex) => {
        preLayout = this.indexLayouts[this.indexLayouts.length - 1];
        layoutManager.calculateTopNodeLayout(item);
        nodeLength += item.length || 0;
        /**
         * 每个section的第一个节点需要加上上个节点的长度
         */
        if (itemIndex === 0 && preLayout) {
          item.offset = (item.offset || 0) + preLayout.offset + preLayout.length;
        }
        this.addIndexLayout({
          length: item.length || 0,
          offset: item.offset || 0,
          index: this.indexLayouts.length,
        });
      });
      /**
       * 计算SectionFooter
       */
      preLayout = this.indexLayouts[this.indexLayouts.length - 1];
      const footerLength = this.getSectionFooterLayout
        ? this.getSectionFooterLayout({
            ...section,
            data: section.sectionData,
          } as any).length
        : 0;
      this.addIndexLayout({
        length: footerLength,
        offset: preLayout ? preLayout.length + preLayout.offset : 0,
        index: this.indexLayouts.length,
      });
      /**
       * 计算SectionLength
       */
      section.length = headerLength + nodeLength + footerLength;
      /**
       * 计算首屏渲染数量
       */
      const curLayout = this.indexLayouts[this.indexLayouts.length - 1];
      if (
        this.initialNumToRender <= 0 &&
        (curLayout.offset || 0) + (curLayout.length || 0) >= this.pageHeight
      ) {
        // 大于页面高度
        this.initialNumToRender = this.indexLayouts.length;
      }
    });
    /**
     * 渲染所有
     */
    if (this.initialNumToRender === 0) {
      this.initialNumToRender = this.indexLayouts.length;
    }
  }
}
