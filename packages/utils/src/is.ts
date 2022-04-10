import { Component, ForwardRefExoticComponent, ReactElement, RefObject } from 'react';
import { Dict } from './types';

export const isClassComponent = (value: any): value is Component<Dict> => {
  return value && value.prototype && value.prototype.isReactComponent;
};

export const isRefComponent = (value: any): value is ForwardRefExoticComponent<Dict> => {
  return value && value.$$typeof === Symbol.for('react.forward_ref');
};

export const isReactElement = (value: any): value is ReactElement => {
  return value && value.$$typeof === Symbol.for('react.element');
};

export const isRefObject = (ref: any): ref is RefObject<any> => {
  return isPlainObject(ref) && Object.prototype.hasOwnProperty.call(ref, 'current');
};

export const isPlainObject = (value: any): value is Record<any, any> => {
  return isObject(value) && value.constructor === Object;
};

export const isObject = (value: any): value is Object => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

export const isArray = (value: any): value is Array<any> => {
  return Object.prototype.toString.call(value) === '[object Array]';
};

export const isInteger = (value: any) => {
  return typeof value === 'number' && value % 1 === 0;
};

export const isFloat = (value: any): value is number => {
  return typeof value === 'number' && value % 1 !== 0;
};

export const isEmpty = (value: any): value is undefined | null | '' | [] | {} => {
  if (value === undefined) {
    return true;
  }
  if (value === null) {
    return true;
  }
  if (typeof value === 'string' || isArray(value)) {
    if (value.length <= 0) {
      return true;
    }
  }
  if (isPlainObject(value)) {
    if (Object.keys(value).length <= 0) {
      return true;
    }
  }
  return false;
};

export const isEqual = (value1: any, value2: any): boolean => {
  if (value1 === value2) {
    return true;
  }
  if (isArray(value1) && isArray(value2)) {
    if (value1.length !== value2.length) {
      return false;
    }
    for (let i = 0; i < value1.length; i++) {
      if (!isEqual(value1[i], value2[i])) {
        return false;
      }
    }
    return true;
  }
  if (isObject(value1) && isObject(value2)) {
    const entries1 = Object.entries(value1);
    const entries2 = Object.entries(value2);
    return isEqual(entries1, entries2);
  }
  return false;
};
