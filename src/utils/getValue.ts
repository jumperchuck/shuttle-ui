import getPath from './getPath';

export default function getValue<T = number | string>(
  themeMapping: any,
  propValue: undefined | number | string,
  userValue: undefined | number | string = propValue,
) {
  let value: T;

  if (typeof themeMapping === 'function') {
    value = themeMapping(propValue);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValue as number] || userValue;
  } else {
    value = getPath(themeMapping, propValue) || userValue;
  }

  return value;
}
