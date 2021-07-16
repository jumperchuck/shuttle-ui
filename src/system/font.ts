import { TextStyle, ViewStyle } from 'react-native';
import {
  ColorPropType,
  FontPropType,
  FontSizePropType,
  FontWeightPropType,
} from './types';
import { colorTransform } from './background';
import style from './style';

export interface FontStyleProps {
  color?: ColorPropType;
  fontFamily?: FontPropType;
  font?: FontPropType;
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
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
}

export const color = style<string>({
  prop: ['color'],
  themeKey: 'colors',
  transform: colorTransform,
});

export const fontFamily = style<ViewStyle>({
  prop: ['fontFamily', 'font'],
  themeKey: 'text.fonts',
});

export const fontSize = style<FontSizePropType>({
  prop: ['fontSize', 'size'],
  themeKey: 'text.sizes',
});

export const fontWeight = style<FontWeightPropType>({
  prop: ['fontWeight', 'weight'],
  themeKey: 'text.weights',
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
    if (!value) return {};
    return { textTransform: 'uppercase' };
  },
});

export const lowercase = style<TextStyle>({
  prop: ['lowercase'],
  transform: (value) => {
    if (!value) return {};
    return { textTransform: 'lowercase' };
  },
});

export const capitalize = style<TextStyle>({
  prop: ['capitalize'],
  transform: (value) => {
    if (!value) return {};
    return { textTransform: 'capitalize' };
  },
});

export const h1 = style<TextStyle>({
  prop: ['h1'],
  themeKey: 'text.h1',
});

export const h2 = style<TextStyle>({
  prop: ['h2'],
  themeKey: 'text.h2',
});

export const h3 = style<TextStyle>({
  prop: ['h3'],
  themeKey: 'text.h3',
});

export const h4 = style<TextStyle>({
  prop: ['h4'],
  themeKey: 'text.h4',
});

export const h5 = style<TextStyle>({
  prop: ['h5'],
  themeKey: 'text.h5',
});

const font = [
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
  h1,
  h2,
  h3,
  h4,
  h5,
] as const;

export default font;
