import { FontVariant, TextStyle } from 'react-native';

export type ColorPropObject = {
  value: keyof ShuttleUI.ThemeColors | string;
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

export type ColorPropType = keyof ShuttleUI.ThemeColors | string | ColorPropObject;

export type FontVariantPropType =
  | keyof ShuttleUI.ThemeFontVariants
  | FontVariant
  | string;

export type FontFamilyPropType = keyof ShuttleUI.ThemeFontFamilies | string;

export type FontSizePropType = keyof ShuttleUI.ThemeFontSizes | string | number;

export type FontWeightPropType =
  | keyof ShuttleUI.ThemeFontWeights
  | TextStyle['fontWeight'];

export type SpacingPropType = keyof ShuttleUI.ThemeSpacings | string | number;

export type BorderPropType = keyof ShuttleUI.ThemeBorders | string | number;

export type RadiusPropType = keyof ShuttleUI.ThemeRadius | string | number;

export type ShadowPropType = keyof ShuttleUI.ThemeShadows | string | number;

declare global {
  namespace ShuttleUI {
    interface ThemeColors {}

    interface ThemeFontVariants {}

    interface ThemeFontFamilies {}

    interface ThemeFontSizes {}

    interface ThemeFontWeights {}

    interface ThemeSpacings {}

    interface ThemeBorders {}

    interface ThemeRadius {}

    interface ThemeShadows {}

    interface Theme {}
  }
}
