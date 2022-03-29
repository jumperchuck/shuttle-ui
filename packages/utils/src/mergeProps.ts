import deepMerge, { DeepMergeOptions } from './deepMerge';

const options: DeepMergeOptions = {
  clone: true,
  arrayMerge: (target, source) => source,
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
