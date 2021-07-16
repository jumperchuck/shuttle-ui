import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet } from 'react-native';
import Color from 'color';
import { getValue } from '../utils';
import { ColorPropObject, ColorPropType } from './types';
import style, { Transform } from './style';

export interface BackgroundStyleProps {
  backgroundColor?: ColorPropType;
  bgColor?: ColorPropType;
  backgroundImage?: ImageSourcePropType;
  bgImage?: ImageSourcePropType;
}

export const colorTransform: Transform<string> = (value, props, themeMapping) => {
  if (typeof value !== 'object' || value === null) {
    return value as string;
  }
  const {
    value: colorValue,
    lighten,
    darken,
    saturate,
    desaturate,
    whiten,
    blacken,
    fade,
    opaquer,
    rotate,
  } = value as ColorPropObject;
  let color = getValue<string>(themeMapping, colorValue);
  if (!color) return color;
  if (lighten) color = Color(color).lighten(lighten).string();
  if (darken) color = Color(color).darken(darken).string();
  if (saturate) color = Color(color).saturate(saturate).string();
  if (desaturate) color = Color(color).desaturate(desaturate).string();
  if (whiten) color = Color(color).whiten(whiten).string();
  if (blacken) color = Color(color).blacken(blacken).string();
  if (fade) color = Color(color).fade(fade).string();
  if (opaquer) color = Color(color).opaquer(opaquer).string();
  if (rotate) color = Color(color).rotate(rotate).string();
  return color;
};

export const bgColor = style<string>({
  prop: ['backgroundColor', 'bgColor'],
  themeKey: 'colors',
  transform: colorTransform,
});

export const bgImage = style<undefined>({
  prop: ['backgroundImage', 'bgImage'],
  styleKey: false,
  transform: (value, props) => {
    if (typeof props.children !== 'string') {
      props.children = React.createElement(
        ImageBackground,
        {
          source: value as ImageSourcePropType,
          resizeMode: 'contain',
          style: StyleSheet.absoluteFillObject,
        },
        props.children,
      );
    }
    return undefined;
  },
});

const background = [bgColor, bgImage] as const;

export default background;
