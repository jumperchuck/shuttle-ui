import React, { useState } from 'react';

import Alert, { AlertProps } from './Alert';
import DialogInput, { DialogInputProps } from '../DialogInput';

export interface PromptProps extends AlertProps {
  inputProps?: DialogInputProps;
  onConfirm?: (value?: string) => void;
}

const Prompt = (props: PromptProps) => {
  const { inputProps, onConfirm, ...alertProps } = props;

  const [value, setValue] = useState('');

  return (
    <Alert
      {...alertProps}
      content={<DialogInput {...inputProps} value={value} onChangeText={setValue} />}
      onConfirm={() => onConfirm?.(value)}
    />
  );
};

export default Prompt;
