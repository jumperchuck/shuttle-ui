import React from 'react';

import Dialog, { DialogProps } from '../Dialog';
import DialogTitle, { DialogTitleProps } from '../DialogTitle';
import DialogContent, { DialogContentProps } from '../DialogContent';
import DialogActions, { DialogActionsProps } from '../DialogActions';

export interface AlertProps extends DialogProps {
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

const Alert = (props: AlertProps) => {
  const {
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

  const hasTitle = title || titleProps;
  const hasContent = content || contentProps;
  const hasActions =
    actions?.length || cancelProps !== false || confirmProps !== false || onConfirm;

  return (
    <Dialog {...dialogProps}>
      {hasTitle ? <DialogTitle {...titleProps}>{title}</DialogTitle> : null}
      {hasContent ? <DialogContent {...contentProps}>{content}</DialogContent> : null}
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
    </Dialog>
  );
};

export default Alert;
