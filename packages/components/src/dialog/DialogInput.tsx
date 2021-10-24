import React from 'react';
import { withTheme } from '@shuttle-ui/theme';

import { Input, InputProps } from '../input';

export interface DialogInputProps extends InputProps {}

const DialogInput: React.FC<DialogInputProps & { theme: ShuttleUI.Theme }> = (props) => {
  return <Input {...props} />;
};

export default withTheme(DialogInput, 'DialogInput');
