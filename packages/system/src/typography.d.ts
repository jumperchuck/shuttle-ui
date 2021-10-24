import { TextStyle, ViewStyle } from 'react-native';
import {
  ColorPropType,
  FontFamilyPropType,
  FontSizePropType,
  FontVariantPropType,
  FontWeightPropType,
} from './types';
export interface TypographyStyleProps {
  color?: ColorPropType;
  fontVariant?: FontVariantPropType;
  variant?: FontVariantPropType;
  fontFamily?: FontFamilyPropType;
  font?: FontFamilyPropType;
  fontSize?: FontSizePropType;
  size?: FontSizePropType;
  fontWeight?: FontWeightPropType;
  weight?: FontWeightPropType;
  letterSpacing?: TextStyle['letterSpacing'];
  lineHeight?: TextStyle['lineHeight'];
  textAlign?: TextStyle['textAlign'];
  align?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  decorationLine?: TextStyle['textDecorationLine'];
  textDecorationStyle?: TextStyle['textDecorationStyle'];
  decorationStyle?: TextStyle['textDecorationStyle'];
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
}
export declare const color: import('./style').StyleFunction<string>;
export declare const fontVar: import('./style').StyleFunction<ViewStyle>;
export declare const fontFamily: import('./style').StyleFunction<ViewStyle>;
export declare const fontSize: import('./style').StyleFunction<FontSizePropType>;
export declare const fontWeight: import('./style').StyleFunction<FontWeightPropType>;
export declare const letterSpacing: import('./style').StyleFunction<number | undefined>;
export declare const lineHeight: import('./style').StyleFunction<number | undefined>;
export declare const textAlign: import('./style').StyleFunction<
  'left' | 'right' | 'auto' | 'center' | 'justify' | undefined
>;
export declare const textDecorationLine: import('./style').StyleFunction<
  'none' | 'underline' | 'line-through' | 'underline line-through' | undefined
>;
export declare const textDecorationStyle: import('./style').StyleFunction<
  'solid' | 'double' | 'dotted' | 'dashed' | undefined
>;
export declare const uppercase: import('./style').StyleFunction<TextStyle>;
export declare const lowercase: import('./style').StyleFunction<TextStyle>;
export declare const capitalize: import('./style').StyleFunction<TextStyle>;
declare const _default: import('./style').StyleFunction<ViewStyle & TextStyle>;
export default _default;
