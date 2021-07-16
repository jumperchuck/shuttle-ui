import React from 'react';

import { Theme } from '../../themes';
import { Box, BoxProps } from '../box';

export interface ListProps extends BoxProps {}

const List: React.FC<ListProps & { theme: Theme }> = (props) => {
  return <Box {...props} />;
};

export default List;
