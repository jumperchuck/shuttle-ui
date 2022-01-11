import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Button, ButtonProps } from '../button/Button';
import { useModal } from './context';

export interface ModalButtonProps extends ButtonProps {
  onPress?: () => boolean | undefined;
}

export const ModalButton: ShuttleUIComponent<ModalButtonProps> = (props) => {
  const {
    children,
    onPress: onPressProp,
    ...rest
  } = useResolutionProps('ModalButton', props);

  const { close } = useModal();

  const onPress = () => {
    if (onPressProp?.() !== false) {
      close();
    }
  };

  return (
    <Button onPress={onPress} {...rest}>
      {children}
    </Button>
  );
};

export default withShuttleUI(ModalButton);
