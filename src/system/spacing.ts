import { SpacingPropType } from './types';
import style from './style';

export interface SpacingStyleProps {
  margin?: SpacingPropType;
  marginTop?: SpacingPropType;
  marginBottom?: SpacingPropType;
  marginLeft?: SpacingPropType;
  marginRight?: SpacingPropType;
  marginHorizontal?: SpacingPropType;
  marginX?: SpacingPropType;
  marginVertical?: SpacingPropType;
  marginY?: SpacingPropType;
  padding?: SpacingPropType;
  paddingTop?: SpacingPropType;
  paddingBottom?: SpacingPropType;
  paddingLeft?: SpacingPropType;
  paddingRight?: SpacingPropType;
  paddingHorizontal?: SpacingPropType;
  paddingX?: SpacingPropType;
  paddingVertical?: SpacingPropType;
  paddingY?: SpacingPropType;
}

export const margin = style({
  prop: ['margin'],
  themeKey: 'spacings',
});

export const marginTop = style({
  prop: ['marginTop'],
  themeKey: 'spacings',
});

export const marginBottom = style({
  prop: ['marginBottom'],
  themeKey: 'spacings',
});

export const marginLeft = style({
  prop: ['marginLeft'],
  themeKey: 'spacings',
});

export const marginRight = style({
  prop: ['marginRight'],
  themeKey: 'spacings',
});

export const marginX = style({
  prop: ['marginHorizontal', 'marginX'],
  themeKey: 'spacings',
});

export const marginY = style({
  prop: ['marginVertical', 'marginY'],
  themeKey: 'spacings',
});

export const padding = style({
  prop: ['padding'],
  themeKey: 'spacings',
});

export const paddingTop = style({
  prop: ['paddingTop'],
  themeKey: 'spacings',
});

export const paddingBottom = style({
  prop: ['paddingBottom'],
  themeKey: 'spacings',
});

export const paddingLeft = style({
  prop: ['paddingLeft'],
  themeKey: 'spacings',
});

export const paddingRight = style({
  prop: ['paddingRight'],
  themeKey: 'spacings',
});

export const paddingX = style({
  prop: ['paddingHorizontal', 'paddingX'],
  themeKey: 'spacings',
});

export const paddingY = style({
  prop: ['paddingVertical', 'paddingY'],
  themeKey: 'spacings',
});

const spacing = [
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,
] as const;

export default spacing;
