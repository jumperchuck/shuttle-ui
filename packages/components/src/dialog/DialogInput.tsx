import React from 'react';

import { ShuttleUIProps } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Input, InputProps } from '../input/Input';

export interface DialogInputProps extends InputProps {}

export const DialogInput = (props: ShuttleUIProps<DialogInputProps>) => {
  const newProps = useResolutionProps('DialogInput', props);

  return <Input {...newProps} />;
};

export default withShuttleUI(DialogInput);
