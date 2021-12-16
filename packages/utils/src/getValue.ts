import getPath from './getPath';

export default function getValue(
  mapping: any,
  propValue: unknown,
  userValue: unknown = propValue,
) {
  let value: any;

  if (typeof mapping === 'function') {
    value = mapping(propValue);
  } else if (Array.isArray(mapping)) {
    value = mapping[propValue as number];
  } else {
    value = getPath(mapping, propValue);
  }

  return value === undefined ? userValue : value;
}
