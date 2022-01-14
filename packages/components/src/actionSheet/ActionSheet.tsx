import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import Modal, { ModalProps } from '../modal';

export interface ActionSheetProps extends ModalProps {
  onClose?: () => void;
}

export const ActionSheet: ShuttleUIComponent<ActionSheetProps> = (props) => {
  const { children, onClose, ...rest } = useResolutionProps('ActionSheet', props);
  return (
    <Modal
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{ justifyContent: 'flex-end' }}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default withShuttleUI(ActionSheet);
