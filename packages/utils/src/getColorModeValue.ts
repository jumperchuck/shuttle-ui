import { isObject } from './is';

export default function getColorModeValue(value: any, colorMode: any) {
  if (!isObject(value)) {
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
}
