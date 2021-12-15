import { Dimensions } from 'react-native';

import { Transform } from './style';

export const getValueByColorMode = (value: any, colorMode: any) => {
  if (typeof value !== 'object' || value == null) {
    return value;
  }
  if (colorMode && value.hasOwnProperty(colorMode)) {
    return value[colorMode];
  }
  return value.hasOwnProperty('main') ? value.main : value;
};

export const getValueByBreakpoints = (value: any, breakpoints: any) => {
  if (typeof value !== 'object' || value == null) {
    return value;
  }
  if (typeof breakpoints !== 'object' || breakpoints == null) {
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
};

export const colorTransform: Transform<string> = (value, props) => {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value !== 'object' || value === null) {
    return undefined;
  }
  return getValueByColorMode(value, props.colorMode);
};
