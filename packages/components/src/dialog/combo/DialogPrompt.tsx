import React, { useState } from 'react';

import DialogAlert, { DialogAlertProps } from './DialogAlert';
import DialogInput, { DialogInputProps } from '../DialogInput';

export interface DialogPromptProps extends Omit<DialogAlertProps, 'onConfirm'> {
  inputProps?: DialogInputProps;
  onConfirm?: (value: string) => void;
}

const DialogPrompt = (props: DialogPromptProps) => {
  const { inputProps, onConfirm, ...alertProps } = props;

  const [value, setValue] = useState('');

  return (
    <DialogAlert
      {...alertProps}
      content={<DialogInput {...inputProps} value={value} onChangeText={setValue} />}
      onConfirm={() => onConfirm?.(value)}
    />
  );
};

export default DialogPrompt;
