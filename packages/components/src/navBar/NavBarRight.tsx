import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Button, ButtonProps } from '../button/Button';

export interface NavBarRightProps extends ButtonProps {}

export const NavBarRight: ShuttleUIComponent<NavBarRightProps> = (props) => {
  const { icon, children, ...rest } = useResolutionProps('NavBarRight', props);

  return (
    <Button rightIcon={icon} {...rest}>
      {children}
    </Button>
  );
};

export default withShuttleUI(NavBarRight);
