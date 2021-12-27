import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIComponent } from '../types';
import { Space, SpaceProps } from '../space/Space';
import { useSpacing } from './context';
import styles from './styles';

export interface GridRowProps extends Omit<SpaceProps, 'direction'> {}

export const GridRow: ShuttleUIComponent<GridRowProps> = (props) => {
  const { style: styleProp, children, ...rest } = props;
  const style = [styles.container, styleProp];
  const { spacing } = useSpacing();
  return (
    <Space style={style} spacing={spacing} {...rest} direction="row">
      {children}
    </Space>
  );
};

export default withColorMode(withTheme(GridRow));
