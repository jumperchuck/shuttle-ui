import React from 'react';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';

export interface CardContentProps extends BoxProps {}

export const CardContent = (props: ShuttleUIProps<CardContentProps>) => {
  const { children, ...rest } = useThemeConfigProps('Card', props);
  return (
    <Box paddingX="md" paddingY="sm" {...rest}>
      {children}
    </Box>
  );
};

export default withColorMode(withTheme(CardContent, 'CardContent'));
