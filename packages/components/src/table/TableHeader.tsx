import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';

import { TableRow, TableRowProps } from './TableRow';

export interface TableHeaderProps extends TableRowProps {}

export const TableHeader: ShuttleUIComponent<TableHeaderProps> = (props) => {
  const { children, ...rest } = useResolutionProps('TableHeader', props);

  return <TableRow {...rest}>{children}</TableRow>;
};

export default withShuttleUI(TableHeader);
