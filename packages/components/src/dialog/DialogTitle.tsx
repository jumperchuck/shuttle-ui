import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box } from '../box/Box';
import { Text, TextProps } from '../text/Text';

export interface DialogTitleProps extends TextProps {}

export const DialogTitle = (props: ShuttleUIProps<DialogTitleProps>) => {
  if (typeof props.children === 'string') {
    return (
      <Text marginX="lg" marginTop="lg" marginBottom="md" {...props}>
        {props.children}
      </Text>
    );
  }
  return (
    <Box marginX="lg" marginTop="lg" marginBottom="md" {...props}>
      {props.children}
    </Box>
  );
};

DialogTitle.displayName = 'Dialog.Title';

export default withColorMode(withTheme(DialogTitle, 'DialogTitle'));
