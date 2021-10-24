import { FontVariant, TextStyle } from 'react-native';
export declare type ColorPropObject = {
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
export declare type ColorPropType =
  | keyof ShuttleUI.ThemeColors
  | string
  | ColorPropObject;
export declare type FontVariantPropType =
  | keyof ShuttleUI.ThemeFontVariants
  | FontVariant
  | string;
export declare type FontFamilyPropType = keyof ShuttleUI.ThemeFontFamilies | string;
export declare type FontSizePropType = keyof ShuttleUI.ThemeFontSizes | string | number;
export declare type FontWeightPropType =
  | keyof ShuttleUI.ThemeFontWeights
  | TextStyle['fontWeight'];
export declare type SpacingPropType = keyof ShuttleUI.ThemeSpacings | string | number;
export declare type BorderPropType = keyof ShuttleUI.ThemeBorders | string | number;
export declare type RadiusPropType = keyof ShuttleUI.ThemeRadius | string | number;
export declare type ShadowPropType = keyof ShuttleUI.ThemeShadows | string | number;
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
