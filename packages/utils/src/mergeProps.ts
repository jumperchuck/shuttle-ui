import deepmerge from 'deepmerge';

const options: deepmerge.Options = {
  clone: false,
  customMerge(key) {
    if (key === 'style' || key.endsWith('Style')) {
      return (styleA, styleB) => [].concat(styleA, styleB);
    }
    return undefined;
  },
};

export default function mergeProps<T1, T2>(
  defaultProps?: Partial<T1>,
  props?: Partial<T2>,
): T1 & T2;
export default function mergeProps<T>(defaultProps?: Partial<T>, props?: Partial<T>) {
  if (!defaultProps) return props || {};
  if (!props) return defaultProps || {};
  return deepmerge(defaultProps, props, options);
}

mergeProps.all = <T>(array: Partial<T>[]) =>
  array.reduce((prev, next) => mergeProps(prev, next));
