import deepmerge from 'deepmerge';

export default function mergeProps<T = any>(props: T, defaultProps: any) {
  if (!defaultProps) return props;
  return deepmerge<T>(defaultProps, props, {
    clone: false,
    customMerge: (key) => {
      if (key === 'style' || key.endsWith('Style')) {
        return (styleA, styleB) => {
          if (Array.isArray(styleB)) {
            return [styleA, styleB];
          }
          return deepmerge(styleA, styleB);
        };
      }
      return undefined;
    },
  });
}
