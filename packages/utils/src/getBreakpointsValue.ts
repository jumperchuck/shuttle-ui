import { Dimensions } from 'react-native';

import { isObject } from './types';

export default function getBreakpointsValue(value: any, breakpoints: any) {
  if (!isObject(value)) {
    return value;
  }
  if (!isObject(breakpoints)) {
    return value;
  }
  const { width } = Dimensions.get('window');
  const breakpoint = Object.keys(value).reduce((curKey, key) => {
    if (width >= breakpoints[key]) {
      if (!curKey || breakpoints[key] > breakpoints[curKey]) {
        return key;
      }
    }
    return curKey;
  }, '');
  return value.hasOwnProperty(breakpoint) ? value[breakpoint] : value;
}
