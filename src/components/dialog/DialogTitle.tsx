import React from 'react';

import { Theme, withTheme } from '../../themes';
import { Box } from '../box';
import Text, { TextProps } from '../text';

export interface DialogTitleProps extends TextProps {}

export const DialogTitle = (props: DialogTitleProps & { theme: Theme }) => {
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

export default withTheme(DialogTitle, 'DialogTitle');
