/**
 * Icon
 */
import React from 'react';
import { Image, ImageStyle, StyleProp, TextStyle } from 'react-native';

import { ColorPropType, color as getColor } from '../../system';
import { Theme, withTheme } from '../../themes';
import { Box, BoxProps } from '../box';
import getIconType, {
  IconType,
  registerIconType,
  registerIconTypes,
} from './getIconType';
import getCustomImage, {
  registerCustomImage,
  registerCustomImages,
} from './getCustomImage';

export interface IconProps extends BoxProps {
  type?: IconType;
  name: string;
  size?: number;
  color?: ColorPropType;
  style?: StyleProp<ImageStyle & TextStyle>;
}

export const Icon = (props: IconProps & { theme: Theme }) => {
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
      <Box
        Component={Image}
        resizeMode="contain"
        source={getCustomImage(name)}
        style={style}
        theme={theme}
        {...rest}
      />
    );
  }

  return (
    <Box
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

Icon.registerIconType = registerIconType;
Icon.registerIconTypes = registerIconTypes;

Icon.registerCustomImage = registerCustomImage;
Icon.registerCustomImages = registerCustomImages;

export default withTheme(Icon, 'Icon');
