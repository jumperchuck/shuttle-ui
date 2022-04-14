import Popover, { PopoverProps } from './Popover';
import PopoverContainer, { PopoverContainerProps } from './PopoverContainer';
import PopoverArrow, { PopoverArrowProps } from './PopoverArrow';
import { usePopoverContext, PopoverContextType } from './context';

export default Object.assign(Popover, {
  Container: PopoverContainer,
  Arrow: PopoverArrow,
  usePopoverContext,
});

export type {
  PopoverProps,
  PopoverContainerProps,
  PopoverArrowProps,
  PopoverContextType,
};
