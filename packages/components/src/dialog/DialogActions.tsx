import React from 'react';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import ButtonGroup, { ButtonGroupProps } from '../button/ButtonGroup';
import Button, { ButtonProps } from '../button';

export interface DialogActionsProps extends ButtonGroupProps {
  actions?: ButtonProps[];
  onCancel?: () => void;
  cancelProps?: ButtonProps | boolean;
  onConfirm?: () => void;
  confirmProps?: ButtonProps | boolean;
}

export const DialogActions = (props: ShuttleUIProps<DialogActionsProps>) => {
  const {
    actions,
    onCancel,
    cancelProps = false,
    onConfirm,
    confirmProps = false,
    children,
    ...rest
  } = useThemeConfigProps('DialogActions', props);

  return (
    <ButtonGroup align="end" paddingY="md" paddingX="lg" {...rest}>
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

export default withColorMode(withTheme(DialogActions, 'DialogActions'));
