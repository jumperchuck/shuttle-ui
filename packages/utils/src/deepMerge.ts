import { isArray, isPlainObject, isReactElement } from './is';
import { Dict } from './types';

export interface DeepMergeOptions {
  clone?: boolean;
  arrayMerge?: (target: any[], source: any[], options?: DeepMergeOptions) => any[];
  objectMerge?: (target: Dict, source: Dict, options?: DeepMergeOptions) => Dict;
  customMerge?: (
    key: string,
    options?: DeepMergeOptions,
  ) => ((target: any, source: any) => any) | undefined;
}

const isMergeable = (value: any) => {
  return (isPlainObject(value) && !isReactElement(value)) || isArray(value);
};

const getMergeFunction = (key: string, options?: DeepMergeOptions) => {
  if (!options?.customMerge) {
    return deepMerge;
  }
  const customMerge = options.customMerge(key, options);
  return customMerge || deepMerge;
};

const cloneObject = (value: any, options?: DeepMergeOptions) => {
  if (options?.clone !== false && !isReactElement(value)) {
    if (isArray(value)) {
      return [...value];
    }
    if (isPlainObject(value)) {
      return { ...value };
    }
  }
  return value;
};

const mergeObject = (target: any, source: any, options?: DeepMergeOptions) => {
  const result = cloneObject(target, options);

  Object.keys(source).forEach((key) => {
    if (isMergeable(source[key]) && Object.prototype.hasOwnProperty.call(target, key)) {
      result[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      result[key] = cloneObject(source[key], options);
    }
  });

  return result;
};

export default function deepMerge<T1, T2, R = T1 & T2>(
  target: T1,
  source: T2,
  options?: DeepMergeOptions,
): R {
  if (isPlainObject(target) && isPlainObject(source)) {
    return (options?.objectMerge || mergeObject)(target, source, options);
  }
  if (isArray(target) && isArray(source)) {
    return (options?.arrayMerge || mergeObject)(target, source, options);
  }
  return target as any;
}
