import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box } from '../box/Box';
import { Text, TextProps } from '../text/Text';

export interface DialogContentProps extends TextProps {}

export const DialogContent: ShuttleUIComponent<DialogContentProps> = (props) => {
  const { children, ...rest } = useResolutionProps('DialogContent', props);

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

export default withShuttleUI(DialogContent);
