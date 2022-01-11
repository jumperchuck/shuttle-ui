import React from 'react';
import { renderNode, RenderProps } from '@shuttle-ui/utils';

import Dialog, { DialogProps } from '../Dialog';
import DialogContainer, { DialogContainerProps } from '../DialogContainer';
import DialogClose, { DialogCloseProps } from '../DialogClose';
import DialogTitle, { DialogTitleProps } from '../DialogTitle';
import DialogContent, { DialogContentProps } from '../DialogContent';
import DialogActions, { DialogActionsProps } from '../DialogActions';

export interface DialogAlertProps extends DialogProps {
  containerProps?: DialogContainerProps;
  closeable?: RenderProps<DialogCloseProps>;
  title?: string | React.ReactNode;
  titleProps?: DialogTitleProps;
  content?: string | React.ReactNode;
  contentProps?: DialogContentProps;
  actions?: DialogActionsProps['actions'];
  actionsProps?: DialogActionsProps;
  onCancel?: DialogActionsProps['onCancel'];
  cancelProps?: DialogActionsProps['cancelProps'];
  onConfirm?: DialogActionsProps['onConfirm'];
  confirmProps?: DialogActionsProps['confirmProps'];
}

const DialogAlert = (props: DialogAlertProps) => {
  const {
    containerProps,
    closeable = true,
    title,
    titleProps,
    content,
    contentProps,
    actions,
    actionsProps,
    onCancel,
    cancelProps = true,
    onConfirm,
    confirmProps = true,
    ...dialogProps
  } = props;

  const hasActions =
    actions?.length || cancelProps !== false || confirmProps !== false || onConfirm;

  return (
    <Dialog {...dialogProps}>
      <DialogContainer {...containerProps}>
        {renderNode(DialogClose, closeable)}
        {title ? <DialogTitle {...titleProps}>{title}</DialogTitle> : null}
        {content ? <DialogContent {...contentProps}>{content}</DialogContent> : null}
        {hasActions ? (
          <DialogActions
            actions={actions}
            onCancel={onCancel}
            cancelProps={cancelProps}
            onConfirm={onConfirm}
            confirmProps={confirmProps}
            {...actionsProps}
          />
        ) : null}
      </DialogContainer>
    </Dialog>
  );
};

export default DialogAlert;
