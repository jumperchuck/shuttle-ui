import { ViewStyle } from 'react-native';

import { BorderPropType, ColorPropType, RadiusPropType, ResponsiveProps } from './types';
import style from './style';
import compose from './compose';
import { colorTransform } from './utils';

export type BordersStyleProps = ResponsiveProps<{
  border: BorderPropType;
  borderTop: BorderPropType;
  borderBottom: BorderPropType;
  borderLeft: BorderPropType;
  borderRight: BorderPropType;
  borderX: BorderPropType;
  borderY: BorderPropType;
  borderRadius: RadiusPropType;
  borderTopRadius: RadiusPropType;
  borderTopLeftRadius: RadiusPropType;
  borderTopRightRadius: RadiusPropType;
  borderBottomRadius: RadiusPropType;
  borderBottomLeftRadius: RadiusPropType;
  borderBottomRightRadius: RadiusPropType;
  borderLeftRadius: RadiusPropType;
  borderRightRadius: RadiusPropType;
  borderColor: ColorPropType;
  borderWidth: number;
  borderStyle: ViewStyle['borderStyle'];
}>;

type BorderDir = 'Top' | 'Bottom' | 'Left' | 'Right';
type RadiusDir = 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight';

const createBorder = (prop: string[], dir?: BorderDir[]) => {
  return style<ViewStyle>({
    prop,
    themeKey: 'borders',
    transform: (value) => {
      if (typeof value !== 'object' || value == null) {
        return undefined;
      }
      if (!dir) {
        return value;
      }
      return dir.reduce((acc, key) => {
        acc[`border${key}Width`] = (value as ViewStyle).borderWidth;
        acc[`border${key}Color`] = (value as ViewStyle).borderColor;
        return acc;
      }, {} as ViewStyle);
    },
  });
};

const createRadius = (prop: string[], dir?: RadiusDir[]) => {
  return style<ViewStyle | number>({
    prop,
    themeKey: 'radius',
    transform: (value) => {
      if (typeof value !== 'number') {
        return undefined;
      }
      if (!dir) {
        return value;
      }
      return dir.reduce((acc, key) => {
        acc[`border${key}Radius`] = value;
        return acc;
      }, {} as ViewStyle);
    },
  });
};

export const border = createBorder(['border']);

export const borderTop = createBorder(['borderTop'], ['Top']);

export const borderBottom = createBorder(['borderBottom'], ['Bottom']);

export const borderLeft = createBorder(['borderLeft'], ['Left']);

export const borderRight = createBorder(['borderRight'], ['Right']);

export const borderX = createBorder(['borderX'], ['Left', 'Right']);

export const borderY = createBorder(['borderY'], ['Top', 'Bottom']);

export const borderRadius = createRadius(['borderRadius']);

export const borderTopRadius = createRadius(['borderTopRadius'], ['TopLeft', 'TopRight']);

export const borderTopLeftRadius = createRadius(['borderTopLeftRadius'], ['TopLeft']);

export const borderTopRightRadius = createRadius(['borderTopRightRadius'], ['TopRight']);

export const borderBottomRadius = createRadius(
  ['borderBottomRadius'],
  ['BottomLeft', 'BottomRight'],
);

export const borderBottomLeftRadius = createRadius(
  ['borderBottomLeftRadius'],
  ['BottomLeft'],
);

export const borderBottomRightRadius = createRadius(
  ['borderBottomRightRadius'],
  ['BottomRight'],
);

export const borderLeftRadius = createRadius(
  ['borderLeftRadius'],
  ['TopLeft', 'BottomLeft'],
);

export const borderRightRadius = createRadius(
  ['borderRightRadius'],
  ['TopRight', 'BottomRight'],
);

export const borderColor = style<string>({
  prop: ['borderColor'],
  themeKey: 'colors',
  transform: colorTransform,
});

export const borderWidth = style<number>({
  prop: ['borderWidth'],
});

export const borderStyle = style<ViewStyle['borderStyle']>({
  prop: ['borderStyle'],
});

export default compose(
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  borderX,
  borderY,
  borderRadius,
  borderTopRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderLeftRadius,
  borderRightRadius,
  borderColor,
  borderWidth,
  borderStyle,
);
