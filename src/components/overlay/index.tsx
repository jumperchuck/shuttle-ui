/**
 * Overlay
 */
import React from 'react';
import RootSiblings, {
  RootSiblingParent,
  RootSiblingPortal,
} from 'react-native-root-siblings';

export interface OverlayManager {
  isDestroy: boolean;
  show: (element: React.ReactNode, callback?: () => void) => OverlayManager;
  update: (element: React.ReactNode, callback?: () => void) => OverlayManager;
  destroy: (callback?: () => void) => OverlayManager;
}

export interface OverlayWrapper<P> {
  manager: OverlayManager;
  show: (props: P, callback?: () => void) => OverlayWrapper<P>;
  update: (props: P, callback?: () => void) => OverlayWrapper<P>;
  destroy: (callback?: () => void) => OverlayWrapper<P>;
}

export default class Overlay {
  static Parent = RootSiblingParent;

  static Portal = RootSiblingPortal;

  static managers: OverlayManager[] = [];

  static create() {
    let siblings: RootSiblings;
    const manager: OverlayManager = {
      isDestroy: false,
      show(element, callback) {
        manager.isDestroy = false;
        const content = React.isValidElement(element)
          ? React.cloneElement(element, { overlayManager: manager })
          : element;
        if (siblings) {
          siblings.update(content, callback);
        } else {
          siblings = new RootSiblings(content, callback);
        }
        const index = Overlay.managers.indexOf(manager);
        if (index < 0) Overlay.managers.push(manager);
        return manager;
      },
      update(element, callback) {
        if (manager.isDestroy) return manager;
        const content = React.isValidElement(element)
          ? React.cloneElement(element, { overlayManager: manager })
          : element;
        manager.show(content, callback);
        return manager;
      },
      destroy(callback) {
        manager.isDestroy = true;
        if (siblings) siblings.destroy(callback);
        const index = Overlay.managers.indexOf(manager);
        if (index >= 0) Overlay.managers.splice(index, 1);
        return manager;
      },
    };
    return manager;
  }

  static show(element: React.ReactNode, callback?: () => void) {
    const manager = this.create();
    manager.show(element, callback);
    return manager;
  }

  static wrap<C extends React.ComponentType<any>, P extends React.ComponentProps<C>>(
    Comp: C,
    defaultProps?: P,
    manager?: OverlayManager,
  ) {
    const wrapper = ((props: P) => <Comp {...props} />) as OverlayWrapper<P> & C;
    wrapper.manager = manager || this.create();
    wrapper.show = (props, callback) => {
      wrapper.manager.show(<Comp {...defaultProps} {...props} />, callback);
      return wrapper;
    };
    wrapper.update = (props, callback) => {
      wrapper.manager.update(<Comp {...defaultProps} {...props} />, callback);
      return wrapper;
    };
    wrapper.destroy = (callback) => {
      wrapper.manager.destroy(callback);
      return wrapper;
    };
    return wrapper;
  }

  static destroyAll() {
    Overlay.managers.forEach((item) => item.destroy());
    Overlay.managers.slice(0, Overlay.managers.length);
  }
}
