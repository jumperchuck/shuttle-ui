import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box } from '../box/Box';
import { Text, TextProps } from '../text/Text';

export interface DialogContentProps extends TextProps {}

export const DialogContent = (props: ShuttleUIProps<DialogContentProps>) => {
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

export default withColorMode(withTheme(DialogContent, 'DialogContent'));
