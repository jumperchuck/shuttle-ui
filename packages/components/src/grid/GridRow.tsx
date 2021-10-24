import React from 'react';
import { useTheme } from '@shuttle-ui/theme';

import { Space, SpaceProps } from '../space';
import { useSpacing } from './context';
import styles from './styles';

export interface GridRowProps extends Omit<SpaceProps, 'direction'> {}

const GridRow: React.FC<GridRowProps> = (props) => {
  const { style: styleProp, children, ...rest } = props;
  const style = [styles.container, styleProp];
  const { spacing } = useSpacing();
  const { theme } = useTheme();
  return (
    <Space
      theme={theme}
      style={style}
      align={null}
      spacing={spacing}
      {...rest}
      direction="row"
    >
      {children}
    </Space>
  );
};

export default GridRow;
