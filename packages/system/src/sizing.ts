import style, { PropType } from './style';
import compose from './compose';
import { WithResponsiveProps } from './types';

export type SizingStyleProps = WithResponsiveProps<{
  w: PropType;
  width: PropType;
  maxW: PropType;
  maxWidth: PropType;
  minW: PropType;
  minWidth: PropType;
  h: PropType;
  height: PropType;
  maxH: PropType;
  maxHeight: PropType;
  minH: PropType;
  minHeight: PropType;
}>;

export const width = style<string | number>({
  prop: ['width', 'w'],
});

export const maxWidth = style<string | number>({
  prop: ['maxWidth', 'maxW'],
});

export const minWidth = style<string | number>({
  prop: ['minWidth', 'minW'],
});

export const height = style<string | number>({
  prop: ['height', 'h'],
});

export const maxHeight = style<string | number>({
  prop: ['maxHeight', 'maxH'],
});

export const minHeight = style<string | number>({
  prop: ['minHeight', 'minH'],
});

export default compose(width, maxWidth, minWidth, height, maxHeight, minHeight);
