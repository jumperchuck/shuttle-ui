import { ViewStyle } from 'react-native';
import { SpacingPropType } from './types';
import style from './style';

export interface PositionsStyleProps {
  position?: ViewStyle['position'];
  zIndex?: ViewStyle['zIndex'];
  top?: SpacingPropType;
  bottom?: SpacingPropType;
  left?: SpacingPropType;
  right?: SpacingPropType;
}

export const position = style<ViewStyle['position']>({
  prop: ['position'],
});

export const zIndex = style<ViewStyle['zIndex']>({
  prop: ['zIndex'],
});

export const top = style<SpacingPropType>({
  prop: ['top'],
  themeKey: 'spacings',
});

export const bottom = style<SpacingPropType>({
  prop: ['bottom'],
  themeKey: 'spacings',
});

export const left = style<SpacingPropType>({
  prop: ['left'],
  themeKey: 'spacings',
});

export const right = style<SpacingPropType>({
  prop: ['right'],
  themeKey: 'spacings',
});

const positions = [position, zIndex, top, bottom, left, right] as const;

export default positions;
