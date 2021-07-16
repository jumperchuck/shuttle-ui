import { TextStyle } from 'react-native';
import { colors } from '../styles';
import { ThemeShadow } from '../themes';
import style from './style';

export interface ShadowStyleProps {
  boxShadow?: number | BoxShadowStyle;
  textShadow?: number | TextShadowStyle;
  elevation?: number;
}

export interface BoxShadowStyle extends ThemeShadow {}

export interface TextShadowStyle {
  textShadowColor?: TextStyle['textShadowColor'];
  textShadowOffset?: TextStyle['textShadowOffset'];
  textShadowRadius?: TextStyle['textShadowRadius'];
}

export const boxShadow = style<BoxShadowStyle>({
  prop: ['boxShadow'],
  themeKey: 'shadows',
  transform: (value) => {
    if (typeof value !== 'object' || value === null) return {};
    return value;
  },
});

export const textShadow = style<TextShadowStyle>({
  prop: ['textShadow'],
  themeKey: 'shadows',
  transform: (value) => {
    const result: TextShadowStyle = {};
    const { shadowColor, shadowOffset, shadowRadius } = value || ({} as any);
    if (shadowColor) result.textShadowColor = shadowColor;
    if (shadowOffset) result.textShadowOffset = shadowOffset;
    if (shadowRadius) result.textShadowRadius = shadowRadius;
    return result;
  },
});

export const elevation = style<BoxShadowStyle>({
  prop: ['elevation'],
  transform: (value) => {
    if (typeof value !== 'number') return {};
    if (value === 0) return {};
    const SHADOW_COLOR = colors.black;
    const SHADOW_OPACITY = 0.3;

    let height, radius;
    switch (value) {
      case 1:
        height = 0.5;
        radius = 0.75;
        break;
      case 2:
        height = 0.75;
        radius = 1.5;
        break;
      default:
        height = value - 1;
        radius = value;
    }

    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: 0,
        height,
      },
      shadowOpacity: SHADOW_OPACITY,
      shadowRadius: radius,
    };
  },
});

const shadow = [boxShadow, textShadow, elevation] as const;

export default shadow;
