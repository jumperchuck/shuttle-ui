/**
 * Modal
 */
import React, { useState } from 'react';
import { ViewStyle, StyleProp, StyleSheet, View } from 'react-native';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';

import { colors, layouts } from '../../styles';
import { useTheme } from '../../themes';
import { OverlayManager } from '../overlay';
import Button, { ButtonProps } from '../button';

export interface ModalProps extends Partial<RNModalProps> {
  overlayManager?: OverlayManager;
  containerStyle?: StyleProp<ViewStyle>;
  onClose?: () => void;
  closeProps?: boolean | ButtonProps;
  children?:
    | React.ReactNode
    | ((params: {
        close: () => void;
        overlayManager?: OverlayManager;
      }) => React.ReactNode);
}

const noop = () => {};

const Modal = (props: ModalProps) => {
  const {
    overlayManager,
    isVisible,
    style: styleProp,
    containerStyle: containerStyleProp,
    onModalHide: onModalHideProp,
    onClose,
    closeProps,
    children,
    ...rest
  } = useTheme(props, 'Modal');

  const [visible, setVisible] = useState(!!overlayManager);
  const style = [styles.wrap, styleProp];
  const containerStyle = [styles.container, containerStyleProp];
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

  return (
    <RNModal
      style={style}
      isVisible={overlayManager ? visible : isVisible}
      onModalHide={onModalHide}
      onBackButtonPress={close}
      onBackdropPress={close}
      hasBackdrop
      useNativeDriver
      {...rest}
    >
      <View style={containerStyle}>
        {typeof children === 'function' ? children({ close, overlayManager }) : children}
        {closeProps && (
          <Button
            type="text"
            color="black"
            style={styles.close}
            onPress={close}
            {...closeProps}
            icon={{
              type: 'material',
              name: 'close',
              ...(closeProps as any).icon,
            }}
          />
        )}
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: layouts.window.width * 0.8,
    backgroundColor: colors.white,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
