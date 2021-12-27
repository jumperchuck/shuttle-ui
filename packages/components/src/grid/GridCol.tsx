import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIComponent } from '../types';
import { Space, SpaceProps } from '../space/Space';
import { useSpacing } from './context';
import styles from './styles';

export interface GridColProps extends Omit<SpaceProps, 'direction'> {}

export const GridCol: ShuttleUIComponent<GridColProps> = (props) => {
  const { style: styleProp, children, ...rest } = props;
  const style = [styles.container, styleProp];
  const { spacing } = useSpacing();
  return (
    <Space style={style} spacing={spacing} {...rest} direction="column">
      {children}
    </Space>
  );
};

export default withColorMode(withTheme(GridCol));
