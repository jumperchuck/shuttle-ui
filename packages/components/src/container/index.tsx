/**
 * Container
 */
import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { BoxProps } from '@shuttle-ui/system';

import { Box } from '../box';

export interface ContainerProps extends BoxProps {}

export const Container: React.FC<ContainerProps & { theme: ShuttleUI.Theme }> = (props) => {
  return <Box {...props} />;
};

export default withTheme(Container);
