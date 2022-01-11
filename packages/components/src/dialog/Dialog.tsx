import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import Modal, { ModalProps } from '../modal';

export interface DialogProps extends ModalProps {}

export const Dialog: ShuttleUIComponent<DialogProps> = (props) => {
  const { children, ...rest } = useResolutionProps('Dialog', props);
  return <Modal {...rest}>{children}</Modal>;
};

export default withShuttleUI(Dialog);
