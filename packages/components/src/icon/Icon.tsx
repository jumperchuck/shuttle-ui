/**
 * Icon
 */
import React from 'react';
import { Image, ImageProps, ImageStyle, StyleProp, TextStyle } from 'react-native';
import { ColorPropType, color as getColor } from '@shuttle-ui/system';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';
import getIconType, { IconType } from './getIconType';
import getCustomImage from './getCustomImage';

export interface IconProps extends BoxProps<{}> {
  type?: IconType;
  name: string;
  size?: number;
  color?: ColorPropType;
  style?: StyleProp<ImageStyle & TextStyle>;
}

export const Icon = (props: ShuttleUIProps<IconProps>) => {
  const {
    type,
    name,
    size = 18,
    color: colorProp = 'text',
    style: styleProp,
    theme,
    ...rest
  } = props;

  const color = getColor({ color: colorProp, theme });

  const IconComp = type ? getIconType(type) : null;

  if (!IconComp) {
    const style = [
      {
        width: size,
        height: size,
        tintColor: color === 'auto' ? undefined : color,
      },
      styleProp,
    ];
    return (
      <Box<ImageProps>
        Component={Image}
        resizeMode="contain"
        source={getCustomImage(name)}
        style={style}
        theme={theme}
        {...(rest as any)}
      />
    );
  }

  return (
    <Box<IconProps>
      Component={IconComp}
      name={name}
      size={size}
      color={color}
      style={styleProp}
      theme={theme}
      {...rest}
    />
  );
};

export default withColorMode(withTheme(Icon, 'Icon'));
