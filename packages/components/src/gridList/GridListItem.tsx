import React from 'react';

import Grid, { GridProps } from '../grid';
import { GridListNodeInfo, GridListRenderItemInfo } from './types';

export interface GridListItemProps<T> extends GridProps {
  data?: T[];
  nodes: GridListNodeInfo<T>[];
  renderItem?: (
    info: GridListRenderItemInfo<T>,
    node: GridListNodeInfo<T>,
  ) => React.ReactNode;
  renderNoItem?: (node: GridListNodeInfo<T>) => React.ReactNode;
}

const GridListItem = <T,>(props: GridListItemProps<T>) => {
  const { data, nodes, renderItem, renderNoItem, ...rest } = props;

  const renderNode = (node: GridListNodeInfo<T>, i: number | string): React.ReactNode => {
    const { type, child, key, value, style } = node;
    let item: T | undefined;
    let position = typeof node.position === 'number' ? node.position : -1;
    if (data?.[position]) {
      item = data[position];
    }
    if (typeof key !== 'undefined' && typeof value !== 'undefined') {
      item = data?.find((fItem, fPosition) => {
        // @ts-ignore
        if (fItem[key] === value) {
          position = fPosition;
          return true;
        }
        return false;
      });
    }
    const content = item
      ? renderItem && renderItem({ item, index: position }, node)
      : renderNoItem && renderNoItem(node);
    const children =
      child && child.length
        ? child.map((childNode, childIndex) =>
            renderNode(childNode, `${i}-${childIndex}`),
          )
        : content;
    if (type === 'row') {
      return (
        <Grid.Row style={style} key={i}>
          {children}
        </Grid.Row>
      );
    }
    return (
      <Grid.Col style={style} key={i}>
        {children}
      </Grid.Col>
    );
  };

  return <Grid {...rest}>{nodes.map(renderNode)}</Grid>;
};

export default React.memo(GridListItem) as typeof GridListItem;
