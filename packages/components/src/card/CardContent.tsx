import React from 'react';
import { withTheme } from '@shuttle-ui/theme';

import { Box, BoxProps } from '../box';

export interface CardContentProps extends BoxProps {}

export const CardContent = (props: CardContentProps & { theme: ShuttleUI.Theme }) => {
  return (
    <Box paddingX="md" paddingY="sm" {...props}>
      {props.children}
    </Box>
  );
};

export default withTheme(CardContent, 'CardContent');
