import style, { PropType } from './style';
import compose from './compose';

export interface SizingStyleProps {
  w?: PropType;
  width?: PropType;
  maxWidth?: PropType;
  minWidth?: PropType;
  h?: PropType;
  height?: PropType;
  maxHeight?: PropType;
  minHeight?: PropType;
}

function transform(value: any) {
  if (value < 0) return undefined;
  return value <= 1 ? `${value * 100}%` : value;
}

export const width = style<string | number>({
  prop: ['width', 'w'],
  transform,
});

export const maxWidth = style<string | number>({
  prop: ['maxWidth'],
  transform,
});

export const minWidth = style<string | number>({
  prop: ['minWidth'],
  transform,
});

export const height = style<string | number>({
  prop: ['height', 'h'],
  transform,
});

export const maxHeight = style<string | number>({
  prop: ['maxHeight'],
  transform,
});

export const minHeight = style<string | number>({
  prop: ['minHeight'],
  transform,
});

export default compose(width, maxWidth, minWidth, height, maxHeight, minHeight);
