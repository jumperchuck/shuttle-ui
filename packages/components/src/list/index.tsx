import React from 'react';

import { Box, BoxProps } from '../box';

export interface ListProps extends BoxProps {}

const List: React.FC<ListProps & { theme: ShuttleUI.Theme }> = (props) => {
  return <Box {...props} />;
};

export default List;
