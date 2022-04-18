import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface TableProps extends BoxProps {}

export const Table: ShuttleUIComponent<TableProps> = (props) => {
  const { children, ...rest } = useResolutionProps('Table', props);

  return (
    <Box border={0} borderBottom="none" {...rest}>
      {children}
    </Box>
  );
};

export default withShuttleUI(Table);
