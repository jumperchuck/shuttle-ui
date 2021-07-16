import React from 'react';

import { Theme, withTheme } from '../../themes';
import { Input, InputProps } from '../input';

export interface DialogInputProps extends InputProps {}

const DialogInput: React.FC<DialogInputProps & { theme: Theme }> = (props) => {
  return <Input {...props} />;
};

export default withTheme(DialogInput, 'DialogInput');
