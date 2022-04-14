import React, { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { isObject, isRefObject } from '@shuttle-ui/utils';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { usePrivateState, useResolutionProps } from '../hooks';
import { Modal, ModalProps } from '../modal/Modal';
import { PopoverContext, PopoverContextType } from './context';

export interface PopoverProps extends ModalProps {
  placement?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom';
  reference:
    | { pageX: number; pageY: number; width: number; height: number }
    | RefObject<View>
    | ((context: PopoverContextType) => ReactNode)
    | ReactNode;
  onClose?: () => void;
}

const useReference = (reference: PopoverProps['reference']) => {
  const ref = useRef<View>(null);

  if (isRefObject(reference)) {
    return reference;
  }

  return ref;
};

const useLayout = (reference: PopoverProps['reference']) => {
  const [layout, setLayout] =
    useState<{ width: number; height: number; pageX: number; pageY: number }>();

  if (isObject(reference) && Object.prototype.hasOwnProperty.call(reference, 'pageX')) {
    return [reference as typeof layout, setLayout] as const;
  }

  return [layout, setLayout] as const;
};

export const Popover: ShuttleUIComponent<PopoverProps> = (props) => {
  const {
    visible: visibleProp,
    placement = 'bottom',
    reference,
    onClose,
    children,
    ...rest
  } = useResolutionProps('Popover', props);

  const [visible, setVisible] = usePrivateState(false, visibleProp);
  const [layout, setLayout] = useLayout(reference);
  const ref = useReference(reference);

  useEffect(() => {
    if (visible) {
      ref.current?.measure((x, y, width, height, pageX, pageY) => {
        setLayout({ width, height, pageX, pageY });
      });
    }
  }, [ref, setLayout, visible]);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    onClose?.();
  };

  const context = { ref, placement, layout, show, hide };

  return (
    <PopoverContext.Provider value={context}>
      {React.isValidElement(reference) ? (
        <Pressable ref={ref} onPress={show}>
          {reference}
        </Pressable>
      ) : typeof reference === 'function' ? (
        reference(context)
      ) : null}
      <Modal
        visible={visible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropColor="transparent"
        onBackdropPress={hide}
        {...rest}
      >
        {children}
      </Modal>
    </PopoverContext.Provider>
  );
};

export default withShuttleUI(Popover);
