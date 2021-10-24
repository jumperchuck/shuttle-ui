import React from 'react';
import { createBox, BoxProps } from '@shuttle-ui/system';
import { withTheme } from '@shuttle-ui/theme';

export const Box = createBox();

export default withTheme(Box, 'Box') as typeof Box;
export { BoxProps };
