import Modal, { ModalProps } from './Modal';
import ModalContainer, { ModalContainerProps } from './ModalContainer';
import ModalClose, { ModalCloseProps } from './ModalClose';
import ModalOverlay from './ModalOverlay';

export default Object.assign(Modal, {
  Container: ModalContainer,
  Close: ModalClose,
  Overlay: ModalOverlay,
});

export type { ModalProps, ModalContainerProps, ModalCloseProps };
