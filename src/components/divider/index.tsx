/**
 * Divider
 */
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '../../styles';
import { Theme, withTheme } from '../../themes';
import { bgColor, ColorPropType } from '../../system';
import { Box, BoxProps } from '../box';
import { Space } from '../space';

export interface DividerProps extends BoxProps {
  color?: ColorPropType;
}

export const Divider: React.FC<DividerProps & { theme: Theme }> = (props) => {
  const {
    style: styleProp,
    color: colorProp = colors.grey400,
    children,
    theme,
    ...rest
  } = props;

  const color = bgColor({ bgColor: colorProp, theme });

  const style: ViewStyle = {
    backgroundColor: color,
    height: StyleSheet.hairlineWidth,
  };

  if (React.isValidElement(children)) {
    style.flex = 1;
    return (
      <Space style={styleProp} theme={theme} {...rest}>
        <View style={style} />
        {React.cloneElement(children, { color })}
        <View style={style} />
      </Space>
    );
  }

  return <Box style={[style, styleProp]} theme={theme} {...rest} />;
};

export default withTheme(Divider, 'Divider');
