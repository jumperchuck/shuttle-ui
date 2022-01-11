import ModalOverlay from '../modal/ModalOverlay';
import Dialog, { DialogProps } from './Dialog';
import DialogContainer, { DialogContainerProps } from './DialogContainer';
import DialogClose, { DialogCloseProps } from './DialogClose';
import DialogTitle, { DialogTitleProps } from './DialogTitle';
import DialogContent, { DialogContentProps } from './DialogContent';
import DialogInput, { DialogInputProps } from './DialogInput';
import DialogActions, { DialogActionsProps } from './DialogActions';
import DialogAlert, { DialogAlertProps } from './combo/DialogAlert';
import DialogPrompt, { DialogPromptProps } from './combo/DialogPrompt';

export default Object.assign(Dialog, {
  Container: DialogContainer,
  Close: DialogClose,
  Title: DialogTitle,
  Content: DialogContent,
  Input: DialogInput,
  Actions: DialogActions,
  alert: (props: DialogAlertProps) => {
    return new ModalOverlay(DialogAlert).show(props);
  },
  prompt: (props: DialogPromptProps) => {
    return new ModalOverlay(DialogPrompt).show(props);
  },
});

export type {
  DialogProps,
  DialogContainerProps,
  DialogCloseProps,
  DialogTitleProps,
  DialogContentProps,
  DialogInputProps,
  DialogActionsProps,
  DialogAlertProps,
  DialogPromptProps,
};
