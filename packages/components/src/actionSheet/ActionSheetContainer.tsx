import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import ModalContainer, { ModalContainerProps } from '../modal/ModalContainer';

export interface ActionSheetContainerProps extends ModalContainerProps {}

export const ActionSheetContainer: ShuttleUIComponent<ActionSheetContainerProps> = (
  props,
) => {
  const { children, ...rest } = useResolutionProps('ActionSheetContainer', props);
  return (
    <ModalContainer width="100%" {...rest}>
      {children}
    </ModalContainer>
  );
};

export default withShuttleUI(ActionSheetContainer);
