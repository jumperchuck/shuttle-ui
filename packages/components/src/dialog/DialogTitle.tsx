import React from 'react';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box } from '../box/Box';
import { Text, TextProps } from '../text/Text';

export interface DialogTitleProps extends TextProps {}

export const DialogTitle = (props: ShuttleUIProps<DialogTitleProps>) => {
  const { children, ...rest } = useThemeConfigProps('DialogTitle', props);
  if (typeof children === 'string') {
    return (
      <Text marginX="lg" marginTop="lg" marginBottom="md" {...rest}>
        {children}
      </Text>
    );
  }
  return (
    <Box marginX="lg" marginTop="lg" marginBottom="md" {...rest}>
      {children}
    </Box>
  );
};

export default withColorMode(withTheme(DialogTitle, 'DialogTitle'));
