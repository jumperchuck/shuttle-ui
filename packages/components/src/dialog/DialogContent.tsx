import React from 'react';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box } from '../box/Box';
import { Text, TextProps } from '../text/Text';

export interface DialogContentProps extends TextProps {}

export const DialogContent = (props: ShuttleUIProps<DialogContentProps>) => {
  const { children, ...rest } = useThemeConfigProps('DialogContent', props);
  if (typeof children === 'string') {
    return (
      <Text paddingY="md" paddingX="lg" {...rest}>
        {children}
      </Text>
    );
  }
  return (
    <Box paddingY="md" paddingX="lg" {...rest}>
      {children}
    </Box>
  );
};

export default withColorMode(withTheme(DialogContent, 'DialogContent'));
