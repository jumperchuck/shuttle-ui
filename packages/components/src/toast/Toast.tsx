import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { Text } from '../text/Text';
import Modal, { ModalProps } from '../modal/Modal';

export interface ToastProps
  extends Pick<
      ModalProps,
      | 'visible'
      | 'overlayManager'
      | 'animationIn'
      | 'animationInTiming'
      | 'animationOut'
      | 'animationOutTiming'
      | 'duration'
    >,
    Omit<BoxProps, 'position'> {
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
}

export const Toast: ShuttleUIComponent<ToastProps> = (props) => {
  const {
    position,
    visible,
    overlayManager,
    animationIn = 'fadeIn',
    animationInTiming,
    animationOut = 'fadeOut',
    animationOutTiming,
    children,
    ...rest
  } = useResolutionProps('Toast', props);

  position;

  return (
    <Modal
      pointerEvents="box-none"
      visible={visible}
      overlayManager={overlayManager}
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      onBackButtonPress={undefined}
      onBackdropPress={undefined}
      coverScreen={false}
      hasBackdrop={false}
    >
      <Box
        px="md"
        py="sm"
        bgColor="rgba(0,0,0,0.8)"
        borderRadius={6}
        position="absolute"
        elevation={3}
        {...rest}
      >
        {typeof children === 'string' ? <Text color="white">{children}</Text> : children}
      </Box>
    </Modal>
  );
};

Toast.defaultProps = {
  position: 'bottom',
};

export default withShuttleUI(Toast);
