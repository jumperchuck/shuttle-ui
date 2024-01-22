import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Button, ButtonProps } from '../button/Button';
import { useModalContext } from './context';

export interface ModalCloseProps extends ButtonProps {}

export const ModalClose: ShuttleUIComponent<ModalCloseProps> = (props) => {
  const {
    children = false,
    onPress: onPressProp,
    ...rest
  } = useResolutionProps('ModalClose', props);

  const { close } = useModalContext();

  return (
    <Button
      type="text"
      color="text"
      position="absolute"
      right={0}
      top={0}
      icon={{
        type: 'ant-design',
        name: 'close',
      }}
      onPress={(event) => {
        close();
        onPressProp?.(event);
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default withShuttleUI(ModalClose);
