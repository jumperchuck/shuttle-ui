import { ViewStyle } from 'react-native';
import { ThemeBorder } from '../themes';
import { ColorPropType, RadiusPropType } from './types';
import { colorTransform } from './background';
import style from './style';

export interface BordersStyleProps {
  border?: number;
  borderTop?: number;
  borderBottom?: number;
  borderLeft?: number;
  borderRight?: number;
  borderRadius?: RadiusPropType;
  borderTopRadius?: RadiusPropType;
  borderBottomRadius?: RadiusPropType;
  borderLeftRadius?: RadiusPropType;
  borderRightRadius?: RadiusPropType;
  borderWidth?: number;
  borderColor?: ColorPropType;
  borderStyle?: ViewStyle['borderStyle'];
}

export const border = style<ThemeBorder>({
  prop: ['border'],
  themeKey: 'borders',
});

export const borderTop = style<ViewStyle>({
  prop: ['borderTop'],
  themeKey: 'borders',
  transform: (value) => {
    const { borderWidth, borderColor } = value || ({} as any);
    return { borderTopWidth: borderWidth, borderTopColor: borderColor };
  },
});

export const borderBottom = style<ViewStyle>({
  prop: ['borderBottom'],
  themeKey: 'borders',
  transform: (value) => {
    const { borderWidth, borderColor } = value || ({} as any);
    return { borderBottomWidth: borderWidth, borderBottomColor: borderColor };
  },
});

export const borderLeft = style<ViewStyle>({
  prop: ['borderLeft'],
  themeKey: 'borders',
  transform: (value) => {
    const { borderWidth, borderColor } = value || ({} as any);
    return { borderLeftWidth: borderWidth, borderLeftColor: borderColor };
  },
});

export const borderRight = style<ViewStyle>({
  prop: ['borderRight'],
  themeKey: 'borders',
  transform: (value) => {
    const { borderWidth, borderColor } = value || ({} as any);
    return { borderRightWidth: borderWidth, borderRightColor: borderColor };
  },
});

export const borderRadius = style<number>({
  prop: ['borderRadius'],
  themeKey: 'radius',
});

export const borderTopRadius = style<ViewStyle>({
  prop: ['borderTopRadius'],
  themeKey: 'radius',
  transform: (value) => {
    if (typeof value !== 'number') return {};
    return { borderTopLeftRadius: value, borderTopRightRadius: value };
  },
});

export const borderBottomRadius = style<ViewStyle>({
  prop: ['borderBottomRadius'],
  themeKey: 'radius',
  transform: (value) => {
    if (typeof value !== 'number') return {};
    return { borderBottomLeftRadius: value, borderBottomRightRadius: value };
  },
});

export const borderLeftRadius = style<ViewStyle>({
  prop: ['borderLeftRadius'],
  themeKey: 'radius',
  transform: (value) => {
    if (typeof value !== 'number') return {};
    return { borderTopLeftRadius: value, borderBottomLeftRadius: value };
  },
});

export const borderRightRadius = style<ViewStyle>({
  prop: ['borderRightRadius'],
  themeKey: 'radius',
  transform: (value) => {
    if (typeof value !== 'number') return {};
    return { borderTopRightRadius: value, borderBottomRightRadius: value };
  },
});

export const borderWidth = style<number>({
  prop: ['borderWidth'],
});

export const borderColor = style<string>({
  prop: ['borderColor'],
  themeKey: 'colors',
  transform: colorTransform,
});

export const borderStyle = style<ViewStyle['borderStyle']>({
  prop: ['borderStyle'],
});

const borders = [
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  borderRadius,
  borderTopRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderRightRadius,
  borderWidth,
  borderColor,
  borderStyle,
] as const;

export default borders;
