/**
 * Dialog
 */
import React from 'react';

import { useTheme } from '../../themes';
import Modal, { ModalProps } from '../modal';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

export interface DialogProps extends ModalProps {}

const Dialog = (props: DialogProps) => {
  const { children, ...rest } = useTheme(props, 'Dialog');
  return (
    <Modal closeProps {...rest}>
      {(params) =>
        React.Children.toArray(
          typeof children === 'function' ? children(params) : children,
        )
          .filter((child) => child != null && typeof child !== 'boolean')
          .map((child, i) => {
            if (React.isValidElement(child)) {
              const override: Record<string, any> = {};
              const isContent = child.type === DialogContent;
              const isActions = child.type === DialogActions;
              if (isActions) {
                override.onPress = params.close;
              }
              if (isContent || isActions) {
                if (i > 0) {
                  override.style = [{ paddingTop: 0 }, child.props.style];
                  return React.cloneElement(child, override);
                }
                if (isActions) {
                  return React.cloneElement(child, override);
                }
              }
            }
            return child;
          })
      }
    </Modal>
  );
};

export default Dialog;
