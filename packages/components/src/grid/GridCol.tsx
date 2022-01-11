import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import { useSpacing } from './context';

export interface GridColProps extends Omit<SpaceProps, 'direction'> {}

export const GridCol: ShuttleUIComponent<GridColProps> = (props) => {
  const { children, ...rest } = useResolutionProps('GridCol', props);
  const { spacing } = useSpacing();
  return (
    <Space flex={1} spacing={spacing} {...rest} direction="column">
      {children}
    </Space>
  );
};

export default withShuttleUI(GridCol);
