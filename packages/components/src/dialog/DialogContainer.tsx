import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import ModalContainer, { ModalContainerProps } from '../modal/ModalContainer';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

export interface DialogContainerProps extends ModalContainerProps {}

export const DialogContainer: ShuttleUIComponent<DialogContainerProps> = (props) => {
  const { children, ...rest } = useResolutionProps('DialogContainer', props);

  return (
    <ModalContainer {...rest}>
      {React.Children.toArray(children)
        .filter((child) => child != null && typeof child !== 'boolean')
        .map((child, i) => {
          if (React.isValidElement(child)) {
            const override: Record<string, any> = {};
            const isContent = child.type === DialogContent;
            const isActions = child.type === DialogActions;
            if (i > 0) {
              if (isContent || isActions) {
                override.paddingTop = 0;
                return React.cloneElement(child, override);
              }
            }
          }
          return child;
        })}
    </ModalContainer>
  );
};

export default withShuttleUI(DialogContainer);
