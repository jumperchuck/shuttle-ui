import React from 'react';

import { Theme, withTheme } from '../../themes';
import { Space, SpaceProps } from '../space';
import { GridProvider } from './context';
import GridRow from './GridRow';
import GridCol from './GridCol';

export interface GridProps extends SpaceProps {
  children?: React.ReactNode;
}

export const Grid = (props: GridProps & { theme: Theme }) => {
  const { spacing = 0, children, ...reset } = props;

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
      <Space
        spacing={spacing}
        padding={spacing}
        {...reset}
        align={null}
        direction={direction}
      >
        {children}
      </Space>
    </GridProvider>
  );
};

Grid.Row = GridRow;
Grid.Col = GridCol;

export default withTheme(Grid, 'Grid');
