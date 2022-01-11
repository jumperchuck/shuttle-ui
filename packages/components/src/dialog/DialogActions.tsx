import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { useModal } from '../modal/context';
import ButtonGroup, { ButtonGroupProps } from '../button/ButtonGroup';
import Button, { ButtonProps } from '../button';

export interface DialogActionsProps extends ButtonGroupProps {
  actions?: ButtonProps[];
  onCancel?: () => void;
  cancelProps?: ButtonProps | boolean;
  onConfirm?: () => void;
  confirmProps?: ButtonProps | boolean;
}

export const DialogActions: ShuttleUIComponent<DialogActionsProps> = (props) => {
  const {
    actions,
    onCancel,
    cancelProps = false,
    onConfirm,
    confirmProps = false,
    children,
    ...rest
  } = useResolutionProps('DialogActions', props);

  const { close } = useModal();

  return (
    <ButtonGroup align="end" paddingY="md" paddingX="lg" onPress={close} {...rest}>
      {actions
        ? actions.map((item, index) => <Button key={index} {...item} />)
        : [
            cancelProps ? (
              <Button key={0} onPress={onCancel} {...cancelProps}>
                CANCEL
              </Button>
            ) : null,
            confirmProps || onConfirm ? (
              <Button key={1} onPress={onConfirm} {...confirmProps}>
                OK
              </Button>
            ) : null,
          ]}
      {children}
    </ButtonGroup>
  );
};

export default withShuttleUI(DialogActions);
