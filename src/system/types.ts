import { TextStyle } from 'react-native';
import { ThemeColors, ThemeRadius, ThemeSpacings, ThemeText } from '../themes';

export type ColorPropObject = {
  value: keyof ThemeColors | string;
  lighten?: number;
  darken?: number;
  saturate?: number;
  desaturate?: number;
  whiten?: number;
  blacken?: number;
  fade?: number;
  opaquer?: number;
  rotate?: number;
};

export type ColorPropType = keyof ThemeColors | string | ColorPropObject;

export type FontPropType = keyof ThemeText['fonts'] | string;

export type FontSizePropType = keyof ThemeText['sizes'] | string | number;

export type FontWeightPropType = keyof ThemeText['weights'] | TextStyle['fontWeight'];

export type SpacingPropType = keyof ThemeSpacings | string | number;

export type RadiusPropType = keyof ThemeRadius | string | number;
