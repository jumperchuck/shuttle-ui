import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import { useCollapseContext } from './context';

export interface CollapseHeaderProps extends SpaceProps {}

const CollapseHeader: ShuttleUIComponent<CollapseHeaderProps> = (props) => {
  const { children, ...rest } = useResolutionProps('CollapseHeader', props);
  const { toggle } = useCollapseContext();

  return (
    <Space px="md" py="sm" alignItems="center" onPress={toggle} {...rest}>
      {children}
    </Space>
  );
};

export default withShuttleUI(CollapseHeader);
