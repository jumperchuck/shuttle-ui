import { isArray, isObject, isReactElement } from './is';

export default function deepClone<T>(source: T): T {
  if (isReactElement(source)) {
    return source;
  }
  if (isArray(source)) {
    return source.map((item) => deepClone(item)) as any;
  }
  if (isObject(source)) {
    const result: any = {};
    for (const key in source) {
      result[key] = deepClone(source[key]);
    }
    return result;
  }
  return source;
}
