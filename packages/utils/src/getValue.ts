import getPath from './getPath';

export default function getValue<T = number | string>(
  mapping: any,
  propValue: undefined | number | string,
  userValue: undefined | number | string = propValue,
) {
  let value: T;

  if (typeof mapping === 'function') {
    value = mapping(propValue);
  } else if (Array.isArray(mapping)) {
    value = mapping[propValue as number] || userValue;
  } else {
    value = getPath(mapping, propValue) || userValue;
  }

  return value;
}
