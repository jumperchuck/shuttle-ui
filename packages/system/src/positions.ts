import { ViewStyle } from 'react-native';

import { WithResponsiveProps, SpacingPropType } from './types';
import style from './style';
import compose from './compose';

export type PositionsStyleProps = WithResponsiveProps<{
  position: ViewStyle['position'];
  zIndex: ViewStyle['zIndex'];
  top: SpacingPropType;
  bottom: SpacingPropType;
  left: SpacingPropType;
  right: SpacingPropType;
}>;

export const position = style<ViewStyle['position']>({
  prop: ['position'],
});

export const zIndex = style<ViewStyle['zIndex']>({
  prop: ['zIndex'],
});

export const top = style<ViewStyle['top']>({
  prop: ['top'],
  themeKey: 'spacings',
});

export const bottom = style<ViewStyle['bottom']>({
  prop: ['bottom'],
  themeKey: 'spacings',
});

export const left = style<ViewStyle['left']>({
  prop: ['left'],
  themeKey: 'spacings',
});

export const right = style<ViewStyle['right']>({
  prop: ['right'],
  themeKey: 'spacings',
});

export default compose(position, zIndex, top, bottom, left, right);
