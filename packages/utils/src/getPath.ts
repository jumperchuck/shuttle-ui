function get(obj: any, path: unknown) {
  if (typeof obj !== 'object' || obj === null) {
    return undefined;
  }
  if (typeof path === 'number') {
    return obj[path];
  }
  if (typeof path === 'string') {
    if (Object.prototype.hasOwnProperty.call(obj, path)) {
      return obj[path];
    } else {
      return path.split('.').reduce((acc, item) => (acc ? acc[item] : undefined), obj);
    }
  }
  return undefined;
}

export default function getPath(obj: any, path: unknown, defaultValue?: unknown) {
  let value = get(obj, path);
  return value === undefined ? defaultValue : value;
}
