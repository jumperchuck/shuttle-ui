import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { OverlayManager } from '../overlay';
import { ModalContext, ModalContextType } from './context';

export interface ModalProps extends Partial<RNModalProps> {
  visible?: boolean;
  overlayManager?: OverlayManager;
  duration?: number;
  children?: React.ReactNode | ((params: ModalContextType) => React.ReactNode);
}

export const Modal: ShuttleUIComponent<ModalProps> = (props) => {
  const {
    overlayManager,
    visible: visibleProp,
    style: styleProp,
    onModalHide: onModalHideProp,
    children,
    ...rest
  } = useResolutionProps('Modal', props);

  const [visible, setVisible] = useState(!!overlayManager);

  const onModalHide = overlayManager
    ? () => {
        onModalHideProp?.();
        overlayManager.destroy();
      }
    : onModalHideProp;

  const close = overlayManager
    ? () => {
        setVisible(false);
      }
    : () => {};

  const finalVisible =
    typeof visibleProp === 'boolean' || !overlayManager ? visibleProp : visible;

  const createPress = (handleKey: keyof typeof rest) =>
    Object.prototype.hasOwnProperty.call(rest, handleKey) &&
    !rest[handleKey] &&
    !overlayManager
      ? undefined
      : (...args: any[]) => {
          close();
          typeof rest[handleKey] === 'function' && (rest[handleKey] as any)(...args);
        };

  return (
    <ModalContext.Provider value={{ overlayManager, close }}>
      <RNModal
        style={[styles.wrap, styleProp]}
        isVisible={finalVisible}
        onModalHide={onModalHide}
        useNativeDriver={!rest.swipeDirection}
        useNativeDriverForBackdrop
        hasBackdrop
        {...rest}
        onBackButtonPress={createPress('onBackButtonPress')}
        onBackdropPress={createPress('onBackdropPress')}
        onSwipeComplete={createPress('onSwipeComplete')}
      >
        {typeof children === 'function' ? children({ overlayManager, close }) : children}
      </RNModal>
    </ModalContext.Provider>
  );
};

export default withShuttleUI(Modal);

const styles = StyleSheet.create({
  wrap: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
