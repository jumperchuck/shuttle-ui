import React from 'react';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Input, InputProps } from '../input/Input';

export interface DialogInputProps extends InputProps {}

export const DialogInput = (props: ShuttleUIProps<DialogInputProps>) => {
  const newProps = useThemeConfigProps('DialogInput', props);
  return <Input {...newProps} />;
};

export default withColorMode(withTheme(DialogInput, 'DialogInput'));
