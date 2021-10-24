import { StyleProp, ViewStyle } from 'react-native';

export interface GridListItemLayout {
  row: number;
  col: number;
  length?: number;
  offset?: number;
}

export interface GridListRenderItemInfo<T> {
  item: T;
  index: number;
}

export interface GridListNodeInfo<T = any> extends GridListItemLayout {
  /**
   * Grid.Row or Grid.Col
   */
  type: 'row' | 'col';
  /**
   * 子节点
   */
  child: GridListNodeInfo<T>[];
  /**
   * 子节点占用行数
   */
  childRow?: number;
  /**
   * 子节点占用列数
   */
  childCol?: number;
  /**
   * 父节点
   */
  parent?: GridListNodeInfo<T>;
  /**
   * 左节点
   */
  left?: GridListNodeInfo<T>;
  /**
   * 右节点
   */
  right?: GridListNodeInfo<T>;
  /**
   * 父节点child下标
   * node.parent[node.index] === node;
   */
  index?: number;
  /**
   * 是否填充满（子节点没有空余位置）
   * layoutManager会跳过此节点寻找下一个有空余位置的子节点
   */
  fill?: boolean;
  /**
   * 渲染data[position]，renderItem({ item: data[position], index: position }, node)
   * layoutManager会跳过此节点寻找下一个有空余位置的子节点
   */
  position?: number;
  /**
   * 渲染data[index].key === value的item
   */
  key?: string;
  /**
   * 渲染data[index].key === value的item
   */
  value?: string;
  /**
   * 节点样式
   */
  style?: StyleProp<ViewStyle>;
}
