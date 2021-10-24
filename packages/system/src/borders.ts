import { ViewStyle } from 'react-native';

import { BorderPropType, ColorPropType, RadiusPropType } from './types';
import style from './style';
import compose from './compose';
import { colorTransform } from './utils';

export interface BordersStyleProps {
  border?: BorderPropType;
  borderTop?: BorderPropType;
  borderBottom?: BorderPropType;
  borderLeft?: BorderPropType;
  borderRight?: BorderPropType;
  borderRadius?: RadiusPropType;
  borderTopRadius?: RadiusPropType;
  borderBottomRadius?: RadiusPropType;
  borderLeftRadius?: RadiusPropType;
  borderRightRadius?: RadiusPropType;
  borderColor?: ColorPropType;
  borderWidth?: number;
  borderStyle?: ViewStyle['borderStyle'];
}

type Dir = 'Top' | 'Bottom' | 'Left' | 'Right';

function borderTransform(value: unknown, dir?: Dir) {
  if (typeof value !== 'object' || value == null) {
    return undefined;
  }
  if (!dir) {
    return value;
  }
  return {
    [`border${dir}Width`]: (value as ViewStyle).borderWidth,
    [`border${dir}Color`]: (value as ViewStyle).borderColor,
  };
}

function radiusTransform(value: unknown, dir?: Dir) {
  if (typeof value !== 'number') {
    return undefined;
  }
  if (!dir) {
    return value;
  }
  if (dir === 'Top' || dir === 'Bottom') {
    return {
      [`border${dir}LeftRadius`]: value,
      [`border${dir}RightRadius`]: value,
    };
  }
  return {
    [`borderTop${dir}Radius`]: value,
    [`borderBottom${dir}Radius`]: value,
  };
}

const createBorderStyle = (prop: string[], dir?: Dir) => {
  return style<ViewStyle>({
    prop,
    themeKey: 'borders',
    transform: (value) => borderTransform(value, dir),
  });
};

const createRadiusStyle = (prop: string[], dir?: Dir) => {
  return style<ViewStyle | number>({
    prop,
    themeKey: 'radius',
    transform: (value) => radiusTransform(value, dir),
  });
};

export const border = createBorderStyle(['border']);

export const borderTop = createBorderStyle(['borderTop'], 'Top');

export const borderBottom = createBorderStyle(['borderBottom'], 'Bottom');

export const borderLeft = createBorderStyle(['borderLeft'], 'Left');

export const borderRight = createBorderStyle(['borderRight'], 'Right');

export const borderRadius = createRadiusStyle(['borderRadius']);

export const borderTopRadius = createRadiusStyle(['borderTopRadius'], 'Top');

export const borderBottomRadius = createRadiusStyle(['borderBottomRadius'], 'Bottom');

export const borderLeftRadius = createRadiusStyle(['borderLeftRadius'], 'Left');

export const borderRightRadius = createRadiusStyle(['borderRightRadius'], 'Right');

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
  borderRadius,
  borderTopRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderRightRadius,
  borderColor,
  borderWidth,
  borderStyle,
);
