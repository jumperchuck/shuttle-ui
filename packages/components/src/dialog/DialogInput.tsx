import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Input, InputProps } from '../input/Input';

export interface DialogInputProps extends InputProps {}

const DialogInput = (props: ShuttleUIProps<DialogInputProps>) => {
  return <Input {...props} />;
};

export default withColorMode(withTheme(DialogInput, 'DialogInput'));
