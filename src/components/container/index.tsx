/**
 * Container
 */
import React from 'react';

import { Theme, withTheme } from '../../themes';
import { BoxProps } from '../../system';
import { Box } from '../box';

export interface ContainerProps extends BoxProps {}

export const Container: React.FC<ContainerProps & { theme: Theme }> = (props) => {
  return <Box {...props} />;
};

export default withTheme(Container);
