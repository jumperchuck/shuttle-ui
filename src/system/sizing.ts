import style, { PropType } from './style';

export interface SizingStyleProps {
  width?: PropType;
  maxWidth?: PropType;
  minWidth?: PropType;
  height?: PropType;
  maxHeight?: PropType;
  minHeight?: PropType;
}

function transform(value: any) {
  if (value < 0) return undefined;
  return value <= 1 ? `${value * 100}%` : value;
}

export const width = style({
  prop: ['width'],
  transform,
});

export const maxWidth = style({
  prop: ['maxWidth'],
  transform,
});

export const minWidth = style({
  prop: ['minWidth'],
  transform,
});

export const height = style({
  prop: ['height'],
  transform,
});

export const maxHeight = style({
  prop: ['maxHeight'],
  transform,
});

export const minHeight = style({
  prop: ['minHeight'],
  transform,
});

const sizing = [width, maxWidth, minWidth, height, maxHeight, minHeight] as const;

export default sizing;
