import { createContext, RefObject, useContext } from 'react';
import { View } from 'react-native';

import { PopoverProps } from './Popover';

export type PopoverContextType = {
  ref: RefObject<View>;
  placement: PopoverProps['placement'];
  layout?: { width: number; height: number; pageX: number; pageY: number };
  show: () => void;
  hide: () => void;
};

export const PopoverContext = createContext<PopoverContextType>({
  ref: { current: null },
  placement: 'bottom',
  show: () => {},
  hide: () => {},
});

export const usePopoverContext = () => useContext(PopoverContext);
