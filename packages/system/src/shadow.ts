import { ShadowStyleIOS, TextStyle } from 'react-native';

import style from './style';
import { ShadowPropType } from './types';
import compose from './compose';

export interface ShadowStyleProps {
  boxShadow?: ShadowPropType | BoxShadowStyle;
  textShadow?: ShadowPropType | TextShadowStyle;
  elevation?: number;
}

export interface BoxShadowStyle extends ShadowStyleIOS {
  elevation?: number;
}

export interface TextShadowStyle {
  textShadowColor?: TextStyle['textShadowColor'];
  textShadowOffset?: TextStyle['textShadowOffset'];
  textShadowRadius?: TextStyle['textShadowRadius'];
}

export const boxShadow = style<BoxShadowStyle>({
  prop: ['boxShadow'],
  themeKey: 'shadows',
  transform: (value) => {
    if (typeof value !== 'object' || value === null) {
      return undefined;
    }
    return value;
  },
});

export const textShadow = style<TextShadowStyle>({
  prop: ['textShadow'],
  themeKey: 'shadows',
  transform: (value) => {
    if (typeof value !== 'object' || value === null) {
      return undefined;
    }
    const result: TextShadowStyle = {};
    const { shadowColor, shadowOffset, shadowRadius } = value as any;
    if (shadowColor) result.textShadowColor = shadowColor;
    if (shadowOffset) result.textShadowOffset = shadowOffset;
    if (shadowRadius) result.textShadowRadius = shadowRadius;
    return result;
  },
});

export const elevation = style<BoxShadowStyle>({
  prop: ['elevation'],
  transform: (value, props) => {
    if (typeof value !== 'number') {
      return undefined;
    }
    if (value === 0) {
      return undefined;
    }
    const { theme } = props;
    const SHADOW_COLOR = theme?.colors?.black || '#000';
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

export default compose(boxShadow, textShadow, elevation);
