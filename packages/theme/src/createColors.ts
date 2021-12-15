export default function createColors<
  T extends Record<string, Partial<ShuttleUI.ThemeColor> | {} | string>,
>(colors: T) {
  const result = {} as Record<keyof T, ShuttleUI.ThemeColor>;
  Object.keys(colors).forEach((key) => {
    const item = colors[key];
    const transform: ShuttleUI.ThemeColor =
      typeof item === 'string'
        ? {
            main: item,
          }
        : { main: '', ...item };
    // for colors.ts, use middle level
    const middle = item['500' as keyof typeof item];
    if (!transform.main && middle) {
      transform.main = middle;
    }
    // TODO: generate light color
    if (!transform.light) {
    }
    // TODO: generate dark color
    if (!transform.dark) {
    }
    result[key as keyof T] = transform;
  });
  return result;
}
