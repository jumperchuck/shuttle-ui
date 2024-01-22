import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Button, ButtonProps } from '../button/Button';

export interface TabBarItemProps extends ButtonProps {}

export const TabBarItem: ShuttleUIComponent<TabBarItemProps> = (props) => {
  const { children, ...rest } = useResolutionProps('TabBarItem', props);

  return (
    <Button border={0} borderBottom="none" {...rest}>
      {children}
    </Button>
  );
};

export default withShuttleUI(TabBarItem);
