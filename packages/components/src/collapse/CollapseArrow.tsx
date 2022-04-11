import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Icon, IconProps } from '../icon/Icon';
import { useCollapseContext } from './context';

export interface CollapseArrowProps extends Partial<IconProps> {}

const CollapseArrow: ShuttleUIComponent<CollapseArrowProps> = (props) => {
  const { children, ...rest } = useResolutionProps('CollapseArrow', props);
  const { active } = useCollapseContext();

  return (
    <Icon type="ant-design" size="sm" name={active ? 'down' : 'right'} {...rest}>
      {children}
    </Icon>
  );
};

export default withShuttleUI(CollapseArrow);
