import { Dimensions } from 'react-native';

import { Transform } from './style';

export const getColorModeValue = (value: any, colorMode: any) => {
  if (typeof value !== 'object' || value == null) {
    return value;
  }
  if (value.hasOwnProperty(colorMode)) {
    return value[colorMode];
  }
  if (value.hasOwnProperty('main')) {
    return value.main;
  }
  if (value.hasOwnProperty('light')) {
    return value.light;
  }
  return value;
};

export const getBreakpointsValue = (value: any, breakpoints: any) => {
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
  return getColorModeValue(
    value,
    props.colorMode || props.theme.colorMode || props.theme.colors.mode,
  );
};
