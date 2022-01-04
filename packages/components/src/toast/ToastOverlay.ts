import Overlay from '../overlay';
import Toast, { ToastProps } from './Toast';

class ToastOverlay {
  static instance: ToastOverlay = new ToastOverlay();

  constructor(props?: Partial<ToastProps>) {
    this.props = {
      duration: 2000,
      ...props,
    };
  }

  props: Partial<ToastProps> = {};

  manager = Overlay.wrap(Toast);

  timer?: ReturnType<typeof setTimeout>;

  create(props?: Partial<ToastProps>) {
    return new ToastOverlay(props);
  }

  show(props: ToastProps, callback?: () => void) {
    const finalProps = { ...this.props, ...props };
    this.duration(finalProps, finalProps.duration);
    return this.manager.show(finalProps, callback);
  }

  update(props: ToastProps, callback?: () => void) {
    const finalProps = { ...this.props, ...props };
    this.duration(finalProps, finalProps.duration);
    return this.manager.update(finalProps, callback);
  }

  destroy(callback?: () => void) {
    return this.manager.destroy(callback);
  }

  duration(props: ToastProps, duration?: number) {
    this.timer && clearTimeout(this.timer);
    if (duration) {
      this.timer = setTimeout(() => {
        this.update({ ...props, visible: false });
      }, duration);
    }
  }
}

/**
 * Has error in ts build
 * error TS4082: Default export of the module has or is using private name 'ToastOverlay'.
 */
// export default new ToastOverlay();

export default ToastOverlay;