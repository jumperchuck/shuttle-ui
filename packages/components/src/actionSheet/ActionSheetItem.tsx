import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Button, ButtonProps } from '../button/Button';

export interface ActionSheetItemProps extends ButtonProps {}

export const ActionSheetItem: ShuttleUIComponent<ActionSheetItemProps> = (props) => {
  const { children, ...rest } = useResolutionProps('ActionSheetItem', props);

  return (
    <Button type="text" color="text" size="lg" {...rest}>
      {children}
    </Button>
  );
};

export default withShuttleUI(ActionSheetItem);
