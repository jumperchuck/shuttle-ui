import ModalOverlay from '../modal/ModalOverlay';
import Toast, { ToastProps } from './Toast';

const instance = new ModalOverlay(Toast, { duration: 2000 });

export default Object.assign(Toast, {
  show: (props: ToastProps | string, callback?: () => void) => {
    return instance.show(
      typeof props === 'string' ? { children: props } : props,
      callback,
    );
  },
  hide: (props?: Partial<ToastProps> | string, callback?: () => void) => {
    return instance.hide(
      typeof props === 'string' ? { children: props } : props,
      callback,
    );
  },
  update: (props: Partial<ToastProps> | string, callback?: () => void) => {
    return instance.update(
      typeof props === 'string' ? { children: props } : props,
      callback,
    );
  },
  destroy: (callback?: () => void) => {
    return instance.destroy(callback);
  },
  create: (props?: Partial<ToastProps>) => {
    return new ModalOverlay(Toast, props);
  },
});

export type { ToastProps };
