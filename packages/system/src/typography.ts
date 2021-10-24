import { TextStyle, ViewStyle } from 'react-native';

import {
  ColorPropType,
  FontFamilyPropType,
  FontSizePropType,
  FontVariantPropType,
  FontWeightPropType,
} from './types';
import { colorTransform } from './utils';
import style from './style';
import compose from './compose';

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

export const color = style({
  prop: ['color'],
  themeKey: 'colors',
  transform: colorTransform,
});

export const fontVar = style<ViewStyle>({
  prop: ['fontVariant', 'variant'],
  themeKey: 'fontVariants',
});

export const fontFamily = style<ViewStyle>({
  prop: ['fontFamily', 'font'],
  themeKey: 'fontFamilies',
});

export const fontSize = style<FontSizePropType>({
  prop: ['fontSize', 'size'],
  themeKey: 'fontSizes',
});

export const fontWeight = style<FontWeightPropType>({
  prop: ['fontWeight', 'weight'],
  themeKey: 'fontWeights',
});

export const letterSpacing = style<TextStyle['letterSpacing']>({
  prop: ['letterSpacing'],
});

export const lineHeight = style<TextStyle['lineHeight']>({
  prop: ['lineHeight'],
});

export const textAlign = style<TextStyle['textAlign']>({
  prop: ['textAlign', 'align'],
});

export const textDecorationLine = style<TextStyle['textDecorationLine']>({
  prop: ['textDecorationLine', 'decorationLine'],
});

export const textDecorationStyle = style<TextStyle['textDecorationStyle']>({
  prop: ['textDecorationStyle', 'decorationStyle'],
});

export const uppercase = style<TextStyle>({
  prop: ['uppercase'],
  transform: (value) => {
    if (!value) return undefined;
    return { textTransform: 'uppercase' };
  },
});

export const lowercase = style<TextStyle>({
  prop: ['lowercase'],
  transform: (value) => {
    if (!value) return undefined;
    return { textTransform: 'lowercase' };
  },
});

export const capitalize = style<TextStyle>({
  prop: ['capitalize'],
  transform: (value) => {
    if (!value) return undefined;
    return { textTransform: 'capitalize' };
  },
});

export default compose(
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  uppercase,
  lowercase,
  capitalize,
);
