import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import { GridProvider } from './context';
import GridRow from './GridRow';

export interface GridProps extends SpaceProps {
  children?: React.ReactNode;
}

export const Grid: ShuttleUIComponent<GridProps> = (props) => {
  const { spacing = 0, children, ...reset } = useResolutionProps('Grid', props);

  let direction: SpaceProps['direction'] = 'row';
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === GridRow) {
        direction = 'column';
      }
    }
  });

  return (
    <GridProvider value={{ spacing }}>
      <Space spacing={spacing} padding={spacing} {...reset} direction={direction}>
        {children}
      </Space>
    </GridProvider>
  );
};

export default withShuttleUI(Grid);
