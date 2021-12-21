import { getColorModeValue } from '@shuttle-ui/utils';

import { Transform } from './style';

export const colorTransform: Transform<string> = (value, props) => {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value !== 'object' || value === null) {
    return undefined;
  }
  return getColorModeValue(
    value,
    props.colorMode || props.theme?.colorMode || props.theme?.colors?.mode,
  );
};
