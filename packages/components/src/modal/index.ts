import Modal, { ModalProps } from './Modal';
import ModalContainer, { ModalContainerProps } from './ModalContainer';
import ModalClose, { ModalCloseProps } from './ModalClose';
import ModalOverlay from './ModalOverlay';
import { useModalContext, ModalContextType } from './context';

export default Object.assign(Modal, {
  Container: ModalContainer,
  Close: ModalClose,
  Overlay: ModalOverlay,
  useModalContext,
});

export type { ModalProps, ModalContainerProps, ModalCloseProps, ModalContextType };
