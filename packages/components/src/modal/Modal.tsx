/**
 * Modal
 */
import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';
import { renderNode } from '@shuttle-ui/utils';

import { ShuttleUIProps } from '../types';
import { OverlayManager } from '../overlay';
import { Button, ButtonProps } from '../button/Button';
import { Box, BoxProps } from '../box/Box';

export interface ModalProps extends Partial<RNModalProps> {
  visible?: boolean;
  overlayManager?: OverlayManager;
  containerProps?: BoxProps;
  onClose?: () => void;
  closeable?: boolean | ButtonProps;
  children?:
    | React.ReactNode
    | ((params: {
        close: () => void;
        overlayManager?: OverlayManager;
      }) => React.ReactNode);
}

const noop = () => {};

export const Modal = (props: ShuttleUIProps<ModalProps>) => {
  const {
    overlayManager,
    visible: visibleProp,
    style: styleProp,
    onModalHide: onModalHideProp,
    containerProps,
    onClose,
    closeable,
    children,
    theme,
    colorMode,
    ...rest
  } = useThemeConfigProps('Modal', props);

  const [visible, setVisible] = useState(!!overlayManager);
  const style = [styles.wrap, styleProp];
  const onModalHide = overlayManager
    ? () => {
        onModalHideProp?.();
        overlayManager.destroy();
      }
    : onModalHideProp;
  const close = overlayManager
    ? () => {
        onClose?.();
        setVisible(false);
      }
    : onClose || noop;

  const finalVisible =
    typeof visibleProp === 'boolean' || !overlayManager ? visibleProp : visible;

  return (
    <RNModal
      style={style}
      isVisible={finalVisible}
      onModalHide={onModalHide}
      onBackButtonPress={close}
      onBackdropPress={close}
      hasBackdrop
      useNativeDriver
      {...rest}
    >
      <Box
        width={Dimensions.get('window').width * 0.8}
        bgColor="white"
        theme={theme}
        colorMode={colorMode}
        {...containerProps}
      >
        {typeof children === 'function' ? children({ close, overlayManager }) : children}
        {renderNode(Button, closeable, {
          type: 'text',
          color: 'black',
          position: 'absolute',
          right: 0,
          top: 0,
          onPress: close,
          icon: {
            type: 'material',
            name: 'close',
          },
          theme,
          colorMode,
        })}
      </Box>
    </RNModal>
  );
};

export default withColorMode(withTheme(Modal, 'Modal'));

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
