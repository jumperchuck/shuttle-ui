import Toast, { ToastProps } from './Toast';
import ToastOverlay from './ToastOverlay';

export default Object.assign(Toast, {
  show: (props: ToastProps, callback?: () => void) =>
    ToastOverlay.instance.show(props, callback),
  update: (props: ToastProps, callback?: () => void) =>
    ToastOverlay.instance.update(props, callback),
  destroy: (callback?: () => void) => ToastOverlay.instance.destroy(callback),
  create: (props?: Partial<ToastProps>) => ToastOverlay.instance.create(props),
});

export type { ToastProps };
