import React from 'react';

import { Theme, withTheme } from '../../themes';
import { ButtonGroup, ButtonGroupProps } from '../button/ButtonGroup';
import Button, { ButtonProps } from '../button';

export interface DialogActionsProps extends ButtonGroupProps {
  actions?: ButtonProps[];
  onCancel?: () => void;
  cancelProps?: ButtonProps | boolean;
  onConfirm?: () => void;
  confirmProps?: ButtonProps | boolean;
}

export const DialogActions = (props: DialogActionsProps & { theme: Theme }) => {
  const {
    actions,
    onCancel,
    cancelProps = false,
    onConfirm,
    confirmProps = false,
    children,
    ...rest
  } = props;

  return (
    <ButtonGroup align="end" paddingY="md" paddingX="lg" {...rest}>
      {actions
        ? actions.map((item, index) => <Button key={index} {...item} />)
        : [
            cancelProps ? (
              <Button key={0} text="CANCEL" onPress={onCancel} {...cancelProps} />
            ) : null,
            confirmProps || onConfirm ? (
              <Button key={1} text="OK" onPress={onConfirm} {...confirmProps} />
            ) : null,
          ]}
      {children}
    </ButtonGroup>
  );
};

DialogActions.displayName = 'Dialog.Actions';

export default withTheme(DialogActions, 'DialogActions');
