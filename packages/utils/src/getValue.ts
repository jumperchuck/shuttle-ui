function get(obj: any, path: unknown): any {
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
  if (Array.isArray(path)) {
    return path.reduce((acc, item) => (acc ? acc[item] : undefined), obj);
  }
  return undefined;
}

export default function getValue(mapping: any, propValue: unknown, userValue?: unknown) {
  let value: any;

  if (typeof mapping === 'function') {
    value = mapping(propValue);
  } else if (Array.isArray(mapping)) {
    value = mapping[propValue as number];
  } else {
    value = get(mapping, propValue);
  }

  return value === undefined ? userValue : value;
}
