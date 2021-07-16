import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

import createBox, { BoxProps, BoxStyleProps } from './createBox';
import font, { FontStyleProps } from './font';

export interface TextStyleProps extends BoxStyleProps, FontStyleProps {
  style?: StyleProp<TextStyle>;
}

export interface TextProps extends BoxProps<RNTextProps, TextStyleProps> {}

export default function createText() {
  const Box = createBox<RNTextProps, TextStyleProps>(...font);

  Box.defaultProps = {
    Component: RNText,
  };

  return Box;
}
