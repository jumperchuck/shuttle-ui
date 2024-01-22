import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import { GridContext } from './context';
import GridRow from './GridRow';

export interface GridProps extends SpaceProps {
  children?: React.ReactNode;
}

export const Grid: ShuttleUIComponent<GridProps> = (props) => {
  const { spacing = 0, children, ...reset } = useResolutionProps('Grid', props);

  const rowChild = React.Children.toArray(children).find((child) => {
    if (React.isValidElement(child)) {
      if (child.type === GridRow) {
        return true;
      }
    }
  });

  const direction = rowChild ? 'column' : 'row';

  return (
    <GridContext.Provider value={{ spacing }}>
      <Space spacing={spacing} padding={spacing} {...reset} direction={direction}>
        {children}
      </Space>
    </GridContext.Provider>
  );
};

export default withShuttleUI(Grid);
