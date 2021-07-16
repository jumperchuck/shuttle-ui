import React from 'react';

import { Space, SpaceProps } from '../space';
import { useTheme } from '../../themes';
import { useSpacing } from './context';
import styles from './styles';

export interface GridColProps extends Omit<SpaceProps, 'direction'> {}

const GridCol: React.FC<GridColProps> = (props) => {
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
      direction="column"
    >
      {children}
    </Space>
  );
};

export default GridCol;
