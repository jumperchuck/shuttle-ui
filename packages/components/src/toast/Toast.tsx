import React from 'react';
import { withColorMode } from '@shuttle-ui/color-mode';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';

import { ShuttleUIComponent } from '../types';
import { BoxProps } from '../box/Box';
import { Text } from '../text/Text';
import { Modal, ModalProps } from '../modal/Modal';

export interface ToastProps
  extends Pick<
      ModalProps,
      | 'visible'
      | 'overlayManager'
      | 'animationIn'
      | 'animationInTiming'
      | 'animationOut'
      | 'animationOutTiming'
    >,
    Omit<BoxProps, 'position'> {
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
  duration?: number;
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
    theme,
    colorMode,
    ...rest
  } = useThemeConfigProps('Toast', props);

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
      closeable={false}
      containerProps={{
        px: 'md',
        py: 'sm',
        bgColor: 'rgba(0,0,0,0.6)',
        borderRadius: 6,
        width: 'auto',
        position: 'absolute',
        ...rest,
      }}
      theme={theme}
      colorMode={colorMode}
    >
      {typeof children === 'string' ? (
        <Text color="white" theme={theme} colorMode={colorMode}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Modal>
  );
};

Toast.defaultProps = {
  position: 'bottom',
};

export default withColorMode(withTheme(Toast, 'Toast'));
