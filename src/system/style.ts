import { getPath, getValue } from '../utils';
import { TextStyle, ViewStyle } from 'react-native';

export type StyleValue = number | string | undefined | ViewStyle | TextStyle;

export type PropType = number | string | undefined;

export type Transform<T extends StyleValue = StyleValue> = (
  value: unknown,
  props: any,
  themeMapping: any,
) => T;

export type StyleOptions<T extends StyleValue = StyleValue> = {
  prop: string[];
  styleKey?: string | false;
  themeKey?: string;
  transform?: Transform<T>;
};

export type StyleFunction<T extends StyleValue = StyleValue> = ((
  props: any,
) => T | undefined) &
  StyleOptions<T>;

export default function style<T = PropType>(options: StyleOptions<T>) {
  const { prop, styleKey = prop[0], themeKey, transform } = options;

  const fn: StyleFunction<T> = (props) => {
    const propValue = props[prop[0]] ?? props[prop[1]];
    if (propValue === null || propValue === undefined) {
      return undefined;
    }
    const themeMapping = getPath(props.theme, themeKey) || {};
    let value = getValue<T>(themeMapping, propValue);

    if (transform) {
      value = transform(value, props, themeMapping);
    }

    if (styleKey === false) {
      return undefined;
    }

    return value;
  };

  fn.prop = prop;
  fn.styleKey = styleKey;
  fn.themeKey = themeKey;
  fn.transform = transform;

  return fn;
}
