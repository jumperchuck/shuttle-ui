import ModalOverlay from '../modal/ModalOverlay';
import ActionSheet, { ActionSheetProps } from './ActionSheet';
import ActionSheetContainer, { ActionSheetContainerProps } from './ActionSheetContainer';
import ActionSheetItem, { ActionSheetItemProps } from './ActionSheetItem';
import ActionSheetComposition, {
  ActionSheetCompositionProps,
} from './combo/ActionSheetComposition';

const instance = new ModalOverlay(ActionSheetComposition);

export default Object.assign(ActionSheet, {
  Container: ActionSheetContainer,
  Item: ActionSheetItem,
  show: (props: ActionSheetCompositionProps, callback?: () => void) => {
    return instance.show(props, callback);
  },
  hide: (props?: Partial<ActionSheetCompositionProps>, callback?: () => void) => {
    return instance.hide(props, callback);
  },
  update: (props: Partial<ActionSheetCompositionProps>, callback?: () => void) => {
    return instance.show(props, callback);
  },
  destroy: (callback?: () => void) => {
    return instance.destroy(callback);
  },
  create: (props?: Partial<ActionSheetCompositionProps>) => {
    return new ModalOverlay(ActionSheetComposition, props);
  },
});

export type { ActionSheetProps, ActionSheetContainerProps, ActionSheetItemProps };
