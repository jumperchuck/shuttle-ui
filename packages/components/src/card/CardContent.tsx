import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface CardContentProps extends BoxProps {}

export const CardContent: ShuttleUIComponent<CardContentProps> = (props) => {
  const { children, ...rest } = useResolutionProps('Card', props);
  return (
    <Box paddingX="md" paddingY="sm" {...rest}>
      {children}
    </Box>
  );
};

export default withShuttleUI(CardContent);
