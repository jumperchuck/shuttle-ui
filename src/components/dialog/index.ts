import React from 'react';

import Overlay from '../overlay';
import DialogComponent from './Dialog';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogInput from './DialogInput';
import DialogActions from './DialogActions';
import Alert from './combo/Alert';
import Prompt from './combo/Prompt';

const Dialog = Object.assign(DialogComponent, {
  Title: DialogTitle,
  Content: DialogContent,
  Input: DialogInput,
  Actions: DialogActions,
  alert: (props: React.ComponentProps<typeof Alert>) => Overlay.wrap(Alert).show(props),
  prompt: (props: React.ComponentProps<typeof Prompt>) =>
    Overlay.wrap(Prompt).show(props),
});

export default Dialog;
