import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { renderNode } from '@shuttle-ui/utils';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { Text, TextProps } from '../text/Text';

export interface TableCellProps extends BoxProps {
  textStyle?: StyleProp<TextStyle>;
  textProps?: TextProps;
}

export const TableCell: ShuttleUIComponent<TableCellProps> = (props) => {
  const { textStyle, textProps, children, ...rest } = useResolutionProps(
    'TableCell',
    props,
  );

  const content =
    typeof children === 'string'
      ? renderNode(Text, children, { ...textProps, style: textStyle })
      : children;

  return (
    <Box flex={1} p="sm" center {...rest}>
      {content}
    </Box>
  );
};

export default withShuttleUI(TableCell);
