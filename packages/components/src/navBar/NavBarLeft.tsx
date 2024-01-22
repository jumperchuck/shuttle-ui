import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Button, ButtonProps } from '../button/Button';

export interface NavBarLeftProps extends ButtonProps {}

export const NavBarLeft: ShuttleUIComponent<NavBarLeftProps> = (props) => {
  const { children, ...rest } = useResolutionProps('NavBarLeft', props);

  return (
    <Button
      icon={{
        type: 'ant-design',
        name: 'left',
      }}
      color="text"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default withShuttleUI(NavBarLeft);
