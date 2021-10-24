import Color from 'color';
import { getValue } from '@shuttle-ui/utils';

import { Transform } from './style';
import { ColorPropObject } from './types';

export const colorTransform: Transform<string> = (value, props, themeMapping) => {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value !== 'object' || value === null) {
    return undefined;
  }
  const { value: colorValue, ...actions } = value as ColorPropObject;
  let color = getValue<string>(themeMapping, colorValue);
  if (!color) return color;
  const keys = Object.keys(actions);
  if (keys.length) {
    color = keys
      .reduce((obj, key) => {
        if (typeof obj[key as keyof Color] === 'function') {
          (obj[key as keyof Color] as Function)(actions[key as keyof typeof actions]);
        }
        return obj;
      }, Color(color))
      .string();
  }
  return color;
};
