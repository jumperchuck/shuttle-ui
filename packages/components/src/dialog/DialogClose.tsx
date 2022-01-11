import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import ModalClose, { ModalCloseProps } from '../modal/ModalClose';

export interface DialogCloseProps extends ModalCloseProps {}

export const DialogClose: ShuttleUIComponent<DialogCloseProps> = (props) => {
  const { children, ...rest } = useResolutionProps('DialogClose', props);
  return <ModalClose {...rest}>{children}</ModalClose>;
};

export default withShuttleUI(DialogClose);
