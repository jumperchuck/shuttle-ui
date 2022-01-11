import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import { useSpacing } from './context';

export interface GridRowProps extends Omit<SpaceProps, 'direction'> {}

export const GridRow: ShuttleUIComponent<GridRowProps> = (props) => {
  const { children, ...rest } = useResolutionProps('GridRow', props);
  const { spacing } = useSpacing();
  return (
    <Space flex={1} spacing={spacing} {...rest} direction="row">
      {children}
    </Space>
  );
};

export default withShuttleUI(GridRow);
