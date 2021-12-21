import React from 'react';

import Overlay from '../overlay';
import Dialog, { DialogProps } from './Dialog';
import DialogTitle, { DialogTitleProps } from './DialogTitle';
import DialogContent, { DialogContentProps } from './DialogContent';
import DialogInput, { DialogInputProps } from './DialogInput';
import DialogActions, { DialogActionsProps } from './DialogActions';
import Alert, { AlertProps } from './combo/Alert';
import Prompt, { PromptProps } from './combo/Prompt';

export default Object.assign(Dialog, {
  Title: DialogTitle,
  Content: DialogContent,
  Input: DialogInput,
  Actions: DialogActions,
  alert: (props: React.ComponentProps<typeof Alert>) => Overlay.wrap(Alert).show(props),
  prompt: (props: React.ComponentProps<typeof Prompt>) =>
    Overlay.wrap(Prompt).show(props),
});

export type {
  DialogProps,
  DialogTitleProps,
  DialogContentProps,
  DialogInputProps,
  DialogActionsProps,
  AlertProps,
  PromptProps,
};
