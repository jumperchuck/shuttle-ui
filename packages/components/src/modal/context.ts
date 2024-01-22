import { createContext, useContext } from 'react';
import { OverlayManager } from '../overlay';

export type ModalContextType = {
  overlayManager?: OverlayManager;
  close: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  close: () => {},
});

export const useModalContext = () => useContext(ModalContext);
