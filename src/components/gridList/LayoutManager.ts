import { GridListItemLayout as ItemLayout, GridListNodeInfo as NodeInfo } from './types';
import { StyleSheet, ViewStyle } from 'react-native';

export default class LayoutManager {
  constructor(
    row: number,
    col: number,
    cellWidth: number,
    cellHeight: number,
    pageWidth: number,
    pageHeight: number,
    spacing: number,
    horizontal: boolean,
  ) {
    this.row = row;
    this.col = col;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.pageWidth = pageWidth;
    this.pageHeight = pageHeight;
    this.spacing = spacing;
    this.horizontal = horizontal;
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

  /**
   * 为了长列表做性能优化，子节点最长的划分为一个整体
   * 垂直滚动按照行，水平滚动按照列
   */
  nodeData: NodeInfo[] = [];

  /**
   * 保存有空余位置的节点
   */
  topNodes: Set<NodeInfo> = new Set();

  // 获取节点高度
  getNodeHeight(row: number) {
    return this.cellHeight * row + (row - 1) * this.spacing;
  }

  // 获取节点宽度
  getNodeWidth(col: number) {
    return this.cellWidth * col + (col - 1) * this.spacing;
  }

  // 是否是顶层节点
  isTopNode(node: NodeInfo): boolean {
    return !node.parent;
  }

  // 获取某个节点最大单元格个数
  getMaxCellNum(node: NodeInfo): number {
    return node.row * node.col;
  }

  // 获取某个节点已占用的单元格数量
  getHasCellNum(node: NodeInfo): number {
    if (typeof node.position !== 'undefined' || node.fill) {
      return this.getMaxCellNum(node);
    }
    return node.child.reduce((pre, item) => pre + this.getHasCellNum(item), 0);
  }

  /**
   * 获取下一个有空余位置的节点
   * @param node
   * @param stopNode
   */
  findNextNode(node: NodeInfo | undefined | null, stopNode?: NodeInfo): NodeInfo | null {
    if (!node) return null;
    let next = this.findRightNode(node, stopNode);
    if (next) return next;
    const { parent } = node;
    if (parent) {
      if (parent === stopNode) return null;
      next = this.findChildNode(parent, parent.child.length - 1);
      if (next) return next;
      if (parent.right === stopNode) return null;
      return this.findNextNode(parent.right);
    }
    return null;
  }

  /**
   * 寻找有空余位置的右节点
   * @param node
   * @param stopNode
   */
  findRightNode(node: NodeInfo | undefined | null, stopNode?: NodeInfo): NodeInfo | null {
    if (!node) return null;
    let { right } = node;
    while (right) {
      if (right === stopNode) return null;
      let next = this.findChildNode(right);
      if (next) return next;
      right = right.right;
    }
    return null;
  }

  /**
   * 寻找有空余位置的子节点（可能是当前节点）
   * @param node
   * @param startIndex
   */
  findChildNode(
    node: NodeInfo | undefined | null,
    startIndex: number = -1,
  ): NodeInfo | null {
    if (!node || node.fill) return null;
    let childNode =
      startIndex >= node.child.length - 1
        ? null
        : node.child.find((item, index) => {
            if (index <= startIndex) return false;
            if (item.fill) return false;
            if (item.child.length <= 0) return true;
            const hasCellNum = this.getHasCellNum(item);
            const maxCellNum = this.getMaxCellNum(item);
            if (hasCellNum === maxCellNum) item.fill = true;
            return hasCellNum < maxCellNum;
          });
    if (childNode) return this.findChildNode(childNode);
    const hasCellNum = this.getHasCellNum(node);
    const maxCellNum = this.getMaxCellNum(node);
    if (hasCellNum === maxCellNum) {
      this.topNodes.delete(node);
      node.fill = true;
    }
    if (hasCellNum < maxCellNum) return node;
    return null;
  }

  /**
   * 添加节点
   * @param parent
   * @param node
   */
  addNode(parent: NodeInfo, node: NodeInfo): NodeInfo {
    const left = parent.child[parent.child.length - 1];
    if (left) {
      node.left = left;
      left.right = node;
    }
    node.parent = parent;
    node.index = parent.child.push(node) - 1;
    node.fill = typeof node.position !== 'undefined';
    node.style = this.getNodeStyle(node);
    if (parent.type === 'row') {
      parent.childCol = (parent.childCol || 0) + node.col;
      parent.childRow = Math.max(parent.childRow || 0, node.row);
    } else {
      parent.childCol = Math.max(parent.childCol || 0, node.col);
      parent.childRow = (parent.childRow || 0) + node.row;
    }
    return node;
  }

  /**
   * 添加顶层节点
   */
  addTopNode(): NodeInfo {
    const node: NodeInfo = {
      type: this.horizontal ? 'col' : 'row',
      child: [],
      childRow: 0,
      childCol: 0,
      row: this.row,
      col: this.col,
    };
    const left = this.nodeData[this.nodeData.length - 1];
    if (left) {
      left.right = node;
      node.left = left;
      /**
       * 每添加一个顶层节点，上一个顶层节点layout则不会在被改变
       * 直接计算上一个节点的样式
       */
      this.calculateTopNodeLayout(left);
    }
    node.index = this.nodeData.push(node) - 1;
    this.topNodes.add(node);
    return node;
  }

  /**
   * 计算顶层节点layout
   * @param topNode
   */
  calculateTopNodeLayout(topNode: NodeInfo) {
    const left = topNode.left;
    const style = this.getNodeStyle(topNode);
    const { height, width, marginTop, marginBottom, marginLeft, marginRight } =
      StyleSheet.flatten(style);
    /**
     * 长度 = (宽/高) + 外边距
     */
    const length = [
      Number(height || width || 0),
      Number(marginTop || marginLeft || 0),
      Number(marginBottom || marginRight || 0),
    ].reduce((a, b) => a + b);
    /**
     * 偏移值 = 上个节点offset + 上个节点length
     */
    const offset = left ? (left.offset || 0) + (left.length || 0) : 0;
    topNode.style = style;
    topNode.length = length;
    topNode.offset = offset;
  }

  /**
   * 获取节点样式
   * @param node
   */
  getNodeStyle(node: NodeInfo): ViewStyle | undefined {
    const isTopNode = this.isTopNode(node);
    const { row, col, index } = node;
    if (isTopNode) {
      if (this.horizontal) {
        return {
          width: this.getNodeWidth(col),
          marginLeft: index === 0 ? this.spacing : 0,
          marginRight: this.spacing,
        };
      } else {
        return {
          height: this.getNodeHeight(row),
          marginTop: index === 0 ? this.spacing : 0,
          marginBottom: this.spacing,
        };
      }
    }
    return {
      width: this.getNodeWidth(col),
      height: this.getNodeHeight(row),
      flex: -1,
    };
  }

  /**
   * 计算当前节点剩余行列
   * @param node
   */
  getSurplus(node: NodeInfo) {
    const { type, col: maxCol, row: maxRow, childCol = 0, childRow = 0 } = node;
    const maxCellNum = this.getMaxCellNum(node);
    let childCellNum = childCol * childRow;
    return {
      maxCellNum,
      maxCol,
      maxRow,
      childCellNum,
      childCol,
      childRow,
      leftCellNum: maxCellNum - childCellNum,
      leftCol: type === 'row' ? maxCol - childCol : maxCol,
      leftRow: type === 'row' ? maxRow : maxRow - childRow,
    };
  }

  addRowNodeToTopNode(
    topNode: NodeInfo,
    itemLayout: ItemLayout,
    index: number,
  ): NodeInfo {
    if (topNode.child.length <= 0) {
      // 插入第一行
      topNode.col = itemLayout.col;
    } else if (topNode.col < itemLayout.col) {
      // 插入当前列最长的行
      topNode.col = itemLayout.col;
      topNode.child.forEach((item) => {
        if (!item.child.length) {
          const rowNode: NodeInfo = {
            ...item,
            type: 'row',
            position: undefined,
            child: [],
            col: topNode.col,
          };
          this.addNode(rowNode, {
            ...item,
            type: 'col',
          });
          Object.assign(item, rowNode);
        }
        item.col = topNode.col;
        item.style = this.getNodeStyle(item);
        item.fill = false;
      });
    }
    return this.addChildToNode(topNode, itemLayout, index);
  }

  addColNodeToTopNode(
    topNode: NodeInfo,
    itemLayout: ItemLayout,
    index: number,
  ): NodeInfo {
    if (topNode.child.length <= 0) {
      // 插入第一列
      topNode.row = itemLayout.row;
    } else if (topNode.row < itemLayout.row) {
      // 插入当前行最长的列
      topNode.row = itemLayout.row;
      topNode.child.forEach((item) => {
        if (!item.child.length) {
          const colNode: NodeInfo = {
            ...item,
            type: 'col',
            position: undefined,
            child: [],
            row: topNode.row,
          };
          this.addNode(colNode, {
            ...item,
            type: 'row',
          });
          Object.assign(item, colNode);
        }
        item.row = topNode.row;
        item.style = this.getNodeStyle(item);
        item.fill = false;
      });
    }
    return this.addChildToNode(topNode, itemLayout, index);
  }

  addChildToNode(node: NodeInfo, itemLayout: ItemLayout, index: number): NodeInfo {
    const { leftRow, leftCol } = this.getSurplus(node);
    if (node.type === 'row') {
      /**
       * 行节点，填充剩余的列
       * [1,*,*]
       * [1,*,*]
       */
      if (itemLayout.row < leftRow) {
        // 拆行
        const colNode = this.addNode(node, {
          type: 'col',
          child: [],
          ...itemLayout,
          row: leftRow,
        });
        return this.addNode(colNode, {
          type: 'row',
          position: index,
          child: [],
          ...itemLayout,
        });
      } else {
        // 独占一列
        return this.addNode(node, {
          type: 'col',
          position: index,
          child: [],
          ...itemLayout,
        });
      }
    } else {
      /**
       * 列节点，填充剩余的行
       * [1,1]
       * [*,*]
       * [*,*]
       */
      if (itemLayout.col < leftCol) {
        // 拆列
        const rowNode = this.addNode(node, {
          type: 'row',
          child: [],
          ...itemLayout,
          col: leftCol,
        });
        return this.addNode(rowNode, {
          type: 'col',
          position: index,
          child: [],
          ...itemLayout,
        });
      } else {
        // 独占一行
        return this.addNode(node, {
          type: 'row',
          position: index,
          child: [],
          ...itemLayout,
        });
      }
    }
  }

  /**
   * 添加子节点（水平排列）
   * @param node
   * @param itemLayout
   * @param index
   */
  addItemLayoutToNodeByHorizontal(
    node: NodeInfo,
    itemLayout: ItemLayout,
    index: number,
  ): boolean {
    const isTopNode = this.isTopNode(node);
    const { leftCellNum, leftCol, leftRow } = this.getSurplus(node);
    if (leftCellNum <= 0) return false;
    if (isTopNode) {
      /**
       * 新的一列，直接插入
       */
      if (node.child.length <= 0) {
        this.addRowNodeToTopNode(node, itemLayout, index);
        return true;
      }
      /**
       * 行数不够
       */
      if (itemLayout.row > leftRow) {
        return false;
      }
      /**
       * 列数不够 & 有下一个节点
       * 比如这种场景，插入1行3列的话应该另起一列
       * [1,*,3]
       * [2,2,3]
       * [*,*,3]
       */
      if (itemLayout.col > leftCol && node.right) {
        return false;
      }
      this.addRowNodeToTopNode(node, itemLayout, index);
      return true;
    }
    if (itemLayout.col > leftCol || itemLayout.row > leftRow) return false;
    this.addChildToNode(node, itemLayout, index);
    return true;
  }

  /**
   * 添加子节点（垂直排列）
   * @param node
   * @param itemLayout
   * @param index
   */
  addItemLayoutToNodeByVertical(
    node: NodeInfo,
    itemLayout: ItemLayout,
    index: number,
  ): boolean {
    const isTopNode = this.isTopNode(node);
    const { leftCellNum, leftCol, leftRow } = this.getSurplus(node);
    if (leftCellNum <= 0) return false;
    if (isTopNode) {
      /**
       * 新的一行，直接插入
       */
      if (node.child.length <= 0) {
        this.addColNodeToTopNode(node, itemLayout, index);
        return true;
      }
      /**
       * 列数不够
       */
      if (itemLayout.col > leftCol) {
        return false;
      }
      /**
       * 行数不够 & 有下一个节点
       * 比如这种场景，插入1列3行的话应该另起一行
       * [1,2,*]
       * [*,2,*]
       * [3,3,3]
       */
      if (itemLayout.row > leftRow && node.right) {
        return false;
      }
      this.addColNodeToTopNode(node, itemLayout, index);
      return true;
    }
    if (itemLayout.col > leftCol || itemLayout.row > leftRow) return false;
    this.addChildToNode(node, itemLayout, index);
    return true;
  }

  /**
   * 添加子节点
   * @param node
   * @param itemLayout
   * @param index
   */
  addItemLayoutToNode(node: NodeInfo, itemLayout: ItemLayout, index: number): boolean {
    if (this.horizontal) {
      return this.addItemLayoutToNodeByHorizontal(node, itemLayout, index);
    } else {
      return this.addItemLayoutToNodeByVertical(node, itemLayout, index);
    }
  }

  /**
   * 计算item处于哪个节点内，添加至nodeData里，由GridList触发
   * @param itemLayout
   * @param index
   */
  addItemLayout(itemLayout: ItemLayout, index: number) {
    const flag = (() => {
      const setIter = this.topNodes.values();
      let topNode = setIter.next().value;
      while (topNode) {
        /**
         * 优先插入当前item有空余的列和行
         * [1,2,3,*]
         * [*,2,3,*]
         * 插入1行1列后
         * [1,2,3,4]
         * [*,2,3,*]
         */
        if (this.addItemLayoutToNode(topNode, itemLayout, index)) return true;
        let node = this.findChildNode(topNode);
        while (node) {
          if (node === topNode) return false;
          if (this.addItemLayoutToNode(node, itemLayout, index)) return true;
          node = this.findNextNode(node, topNode);
        }
        topNode = setIter.next().value;
      }
      return false;
    })();
    if (!flag) {
      this.addItemLayoutToNode(this.addTopNode(), itemLayout, index);
    }
    // let node = this.findChildNode(this.nodeData[0]) || this.addTopNode();
    // while (!this.addItemLayoutToNode(node, itemLayout, index)) {
    //   node = this.findNextNode(node) || this.addTopNode();
    // }
  }

  /**
   * 计算item长度和偏移值，优化长列表滚动，由GridList触发
   */
  calculateNodeData() {
    this.initialNumToRender = 0;
    /**
     * 计算最后一个节点的layout
     */
    if (this.nodeData.length) {
      this.calculateTopNodeLayout(this.nodeData[this.nodeData.length - 1]);
    }
    /**
     * 计算首屏渲染数量
     */
    this.nodeData.some((item, index) => {
      // 大于页面高度
      if ((item.offset || 0) + (item.length || 0) >= this.pageHeight) {
        this.initialNumToRender = index + 1;
        return true;
      }
    });
    /**
     * 渲染所有
     */
    if (this.initialNumToRender === 0) {
      this.initialNumToRender = this.nodeData.length;
    }
  }
}
