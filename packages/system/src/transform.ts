import { ViewStyle } from 'react-native';

import style from './style';
import compose from './compose';

export interface TransformStyleProps {
  perspective?: number;
  rotate?: string;
  rotateX?: string;
  rotateY?: string;
  rotateZ?: string;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  translateX?: number;
  translateY?: number;
  skewX?: string;
  skewY?: string;
  matrix?: number[];
}

const create = (prop: string[]) => {
  return style<ViewStyle>({
    prop,
    styleKey: 'transform',
    transform: (value) => {
      if (typeof value === 'undefined' || value == null) {
        return undefined;
      }
      return { [prop[0]]: value };
    },
  });
};

export const perspective = create(['perspective']);

export const rotate = create(['rotate']);

export const rotateX = create(['rotateX']);

export const rotateY = create(['rotateY']);

export const rotateZ = create(['rotateZ']);

export const scale = create(['scale']);

export const scaleX = create(['scaleX']);

export const scaleY = create(['scaleY']);

export const translateX = create(['translateX']);

export const translateY = create(['translateY']);

export const skewX = create(['skewX']);

export const skewY = create(['skewY']);

export const matrix = create(['matrix']);

export default compose(
  perspective,
  rotate,
  rotateX,
  rotateY,
  rotateZ,
  scale,
  scaleX,
  scaleY,
  translateX,
  translateY,
  skewX,
  skewY,
  matrix,
);
