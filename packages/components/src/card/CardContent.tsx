import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';

export interface CardContentProps extends BoxProps {}

export const CardContent = (props: ShuttleUIProps<CardContentProps>) => {
  return (
    <Box paddingX="md" paddingY="sm" {...props}>
      {props.children}
    </Box>
  );
};

export default withColorMode(withTheme(CardContent, 'CardContent'));
