import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface TabViewItemProps extends BoxProps {}

export const TabViewItem: ShuttleUIComponent<TabViewItemProps> = (props) => {
  const { children, ...rest } = useResolutionProps('TabViewItem', props);

  return (
    <Box w="100%" h="100%" center {...rest}>
      {children}
    </Box>
  );
};

export default withShuttleUI(TabViewItem);
