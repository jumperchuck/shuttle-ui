import React from 'react';

import { Theme, withTheme } from '../../themes';
import { Box, BoxProps } from '../box';

export interface CardContentProps extends BoxProps {}

export const CardContent = (props: CardContentProps & { theme: Theme }) => {
  return (
    <Box paddingX="md" paddingY="sm" {...props}>
      {props.children}
    </Box>
  );
};

export default withTheme(CardContent, 'CardContent');
