import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box } from '../box/Box';
import { Text, TextProps } from '../text/Text';

export interface DialogTitleProps extends TextProps {}

export const DialogTitle: ShuttleUIComponent<DialogTitleProps> = (props) => {
  const { children, ...rest } = useResolutionProps('DialogTitle', props);

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

export default withShuttleUI(DialogTitle);
