import deepmerge from 'deepmerge';

export default function mergeProps<T extends {}>(props: T, defaultProps: any) {
  if (!defaultProps) return props;
  return deepmerge<T>(defaultProps, props, {
    clone: false,
    customMerge(key) {
      if (key === 'style' || key.endsWith('Style')) {
        return (styleA, styleB) => [].concat(styleA, styleB);
      }
      return undefined;
    },
  });
}
