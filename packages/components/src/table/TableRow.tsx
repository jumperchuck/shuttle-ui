import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';

export interface TableRowProps extends SpaceProps {}

export const TableRow: ShuttleUIComponent<TableRowProps> = (props) => {
  const { children, ...rest } = useResolutionProps('TableRow', props);

  return (
    <Space borderBottom={0} {...rest}>
      {children}
    </Space>
  );
};

export default withShuttleUI(TableRow);
