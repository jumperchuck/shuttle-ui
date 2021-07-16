import React from 'react';

import { Theme, withTheme } from '../../themes';
import { Box } from '../box';
import Text, { TextProps } from '../text';

export interface DialogContentProps extends TextProps {}

export const DialogContent = (props: DialogContentProps & { theme: Theme }) => {
  if (typeof props.children === 'string') {
    return (
      <Text paddingY="md" paddingX="lg" {...props}>
        {props.children}
      </Text>
    );
  }
  return (
    <Box paddingY="md" paddingX="lg" {...props}>
      {props.children}
    </Box>
  );
};

DialogContent.displayName = 'Dialog.Content';

export default withTheme(DialogContent, 'DialogContent');
