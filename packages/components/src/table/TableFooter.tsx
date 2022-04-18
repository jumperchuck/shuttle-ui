import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { TableRow, TableRowProps } from './TableRow';

export interface TableFooterProps extends TableRowProps {}

export const TableFooter: ShuttleUIComponent<TableFooterProps> = (props) => {
  const { children, ...rest } = useResolutionProps('TableFooter', props);

  return <TableRow {...rest}>{children}</TableRow>;
};

export default withShuttleUI(TableFooter);
