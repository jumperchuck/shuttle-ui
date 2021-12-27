import Toast, { ToastProps } from './Toast';
import ToastOverlay from './ToastOverlay';

export default Object.assign(Toast, {
  create: (props?: Partial<ToastProps>) => ToastOverlay.create(props),
  show: (props: ToastProps, callback?: () => void) => ToastOverlay.show(props, callback),
  update: (props: ToastProps, callback?: () => void) =>
    ToastOverlay.update(props, callback),
  destroy: (callback?: () => void) => ToastOverlay.destroy(callback),
});

export type { ToastProps };
