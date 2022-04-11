import { createContext, useContext } from 'react';

export type CollapseContextType = {
  active: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const CollapseContext = createContext<CollapseContextType>({
  active: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const useCollapseContext = () => useContext(CollapseContext);
