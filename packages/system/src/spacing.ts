import { WithResponsiveProps, SpacingPropType } from './types';
import style from './style';
import compose from './compose';

export type SpacingStyleProps = WithResponsiveProps<{
  m: SpacingPropType;
  margin: SpacingPropType;
  mt: SpacingPropType;
  marginTop: SpacingPropType;
  mb: SpacingPropType;
  marginBottom: SpacingPropType;
  ml: SpacingPropType;
  marginLeft: SpacingPropType;
  mr: SpacingPropType;
  marginRight: SpacingPropType;
  marginHorizontal: SpacingPropType;
  mx: SpacingPropType;
  marginX: SpacingPropType;
  marginVertical: SpacingPropType;
  my: SpacingPropType;
  marginY: SpacingPropType;
  p: SpacingPropType;
  padding: SpacingPropType;
  pt: SpacingPropType;
  paddingTop: SpacingPropType;
  pb: SpacingPropType;
  paddingBottom: SpacingPropType;
  pl: SpacingPropType;
  paddingLeft: SpacingPropType;
  pr: SpacingPropType;
  paddingRight: SpacingPropType;
  paddingHorizontal: SpacingPropType;
  px: SpacingPropType;
  paddingX: SpacingPropType;
  paddingVertical: SpacingPropType;
  py: SpacingPropType;
  paddingY: SpacingPropType;
}>;

export const margin = style({
  prop: ['margin', 'm'],
  themeKey: 'spacings',
});

export const marginTop = style({
  prop: ['marginTop', 'mt'],
  themeKey: 'spacings',
});

export const marginBottom = style({
  prop: ['marginBottom', 'mb'],
  themeKey: 'spacings',
});

export const marginLeft = style({
  prop: ['marginLeft', 'ml'],
  themeKey: 'spacings',
});

export const marginRight = style({
  prop: ['marginRight', 'mr'],
  themeKey: 'spacings',
});

export const marginX = style({
  prop: ['marginHorizontal', 'marginX', 'mx'],
  themeKey: 'spacings',
});

export const marginY = style({
  prop: ['marginVertical', 'marginY', 'my'],
  themeKey: 'spacings',
});

export const padding = style({
  prop: ['padding', 'p'],
  themeKey: 'spacings',
});

export const paddingTop = style({
  prop: ['paddingTop', 'pt'],
  themeKey: 'spacings',
});

export const paddingBottom = style({
  prop: ['paddingBottom', 'pb'],
  themeKey: 'spacings',
});

export const paddingLeft = style({
  prop: ['paddingLeft', 'pl'],
  themeKey: 'spacings',
});

export const paddingRight = style({
  prop: ['paddingRight', 'pr'],
  themeKey: 'spacings',
});

export const paddingX = style({
  prop: ['paddingHorizontal', 'paddingX', 'px'],
  themeKey: 'spacings',
});

export const paddingY = style({
  prop: ['paddingVertical', 'paddingY', 'py'],
  themeKey: 'spacings',
});

export default compose(
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
);
