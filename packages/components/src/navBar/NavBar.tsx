import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface NavBarProps extends BoxProps {}

export const NavBar: ShuttleUIComponent<NavBarProps> = (props) => {
  const { children, ...rest } = useResolutionProps('NavBar', props);

  return (
    <Box flexDirection="row" {...rest}>
      {children}
    </Box>
  );
};

export default withShuttleUI(NavBar);
