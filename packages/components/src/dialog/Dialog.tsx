/**
 * Dialog
 */
import React from 'react';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import Modal, { ModalProps } from '../modal';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

export interface DialogProps extends ModalProps {}

export const Dialog = (props: DialogProps) => {
  const { children, ...rest } = useThemeConfigProps('Dialog', props);
  return (
    <Modal closeable {...rest}>
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
                  override.paddingTop = 0;
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

export default withColorMode(withTheme(Dialog, 'Dialog'));
