import deepMerge, { DeepMergeOptions } from './deepMerge';
import { isArray, isPlainObject, isReactElement, isRefObject } from './is';

const options: DeepMergeOptions = {
  clone: true,
  isMergeable: (value) => {
    return (
      isArray(value) ||
      (isPlainObject(value) && !isReactElement(value) && !isRefObject(value))
    );
  },
  arrayMerge: (target, source) => {
    return source;
  },
  customMerge(key) {
    if (key === 'style' || key.endsWith('Style')) {
      return (styleA, styleB) => [].concat(styleA, styleB);
    }
    return undefined;
  },
};

export default function mergeProps<T1, T2, R = T1 & T2>(
  defaultProps?: T1,
  props?: T2,
): R {
  if (!defaultProps) return props || ({} as any);
  if (!props) return defaultProps || ({} as any);
  return deepMerge(defaultProps, props, options);
}
