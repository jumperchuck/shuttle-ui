import { ComponentType } from 'react';

import Overlay, { OverlayWrapper } from '../overlay';
import Modal, { ModalProps } from './Modal';

class ModalOverlay<P extends ModalProps> {
  constructor(
    protected Component?: ComponentType<P>,
    protected defaultProps?: Partial<P>,
  ) {
    this.manager = Overlay.wrap(Component || Modal, defaultProps);
  }

  manager!: OverlayWrapper<P>;

  timer?: ReturnType<typeof setTimeout>;

  show(props: P, callback?: () => void) {
    this.duration(props.duration ?? this.defaultProps?.duration);
    this.manager.show(props, callback);
    return this;
  }

  hide(props?: Partial<P>, callback?: () => void) {
    this.timer && clearTimeout(this.timer);
    this.manager.update({ ...props, visible: false } as Partial<P>, callback);
    return this;
  }

  update(props: Partial<P>, callback?: () => void) {
    this.duration(props.duration ?? this.defaultProps?.duration);
    this.manager.update(props, callback);
    return this;
  }

  destroy(callback?: () => void) {
    this.manager.destroy(callback);
    return this;
  }

  duration(duration?: number) {
    this.timer && clearTimeout(this.timer);
    if (duration) {
      this.timer = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
}

export default ModalOverlay;
