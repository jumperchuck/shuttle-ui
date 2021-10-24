import { TextStyle, ViewStyle } from 'react-native';

import { StyleFunction } from './style';

export default function compose<T extends StyleFunction<any>[]>(...styles: T) {
  const handlers = styles.reduce((acc, style) => {
    if (style.handlers) {
      Object.assign(acc, style.handlers);
    } else {
      style.prop.forEach((prop) => {
        acc[prop] = style;
      });
    }
    return acc;
  }, {} as Record<string, StyleFunction>);

  const fn: StyleFunction<ViewStyle & TextStyle> = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      const style = handlers[prop];
      if (style) {
        const { styleKey } = style;
        const value = style(props);
        if (typeof value === 'undefined' || value === null) {
          return acc;
        } else if (typeof value === 'object') {
          if (styleKey === 'transform') {
            Object.assign(acc, { transform: [...(acc.transform || []), value] });
          } else {
            Object.assign(acc, value);
          }
        } else if (styleKey) {
          Object.assign(acc, { [styleKey]: value });
        }
      }

      return acc;
    }, {} as ViewStyle);
  };

  fn.prop = styles.reduce((acc, style) => acc.concat(style.prop), [] as string[]);
  fn.handlers = handlers;

  return fn;
}
