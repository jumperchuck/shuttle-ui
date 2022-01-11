/**
 * Icon
 */
import React from 'react';
import { Image, ImageProps, ImageStyle, StyleProp, TextStyle } from 'react-native';
import {
  ColorPropType,
  FontSizePropType,
  color as getColor,
  fontSize as getSize,
} from '@shuttle-ui/system';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import getIconType, { IconType } from './getIconType';
import getCustomImage from './getCustomImage';

export interface IconProps extends BoxProps<{}> {
  type?: IconType;
  name: string;
  size?: FontSizePropType;
  color?: ColorPropType;
  style?: StyleProp<ImageStyle & TextStyle>;
}

export const Icon: ShuttleUIComponent<IconProps> = (props) => {
  const {
    type,
    name,
    size: sizeProp,
    color: colorProp,
    style: styleProp,
    ...rest
  } = useResolutionProps('Icon', props);

  const color = getColor({ color: colorProp, ...rest }) || 'text';
  const size = getSize({ size: sizeProp, ...rest }) || 18;

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
      {...rest}
    />
  );
};

export default withShuttleUI(Icon);
