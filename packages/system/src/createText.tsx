import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

import createBox, { BoxProps, boxStyleFunction, BoxStyleProps } from './createBox';
import typography, { TypographyStyleProps } from './typography';
import compose from './compose';

export interface TextStyleProps extends BoxStyleProps, TypographyStyleProps {
  style?: StyleProp<TextStyle>;
}

export interface TextProps extends BoxProps<RNTextProps, TextStyleProps> {}

export const textStyleFunction = compose(boxStyleFunction, typography);

export default function createText(defaultTheme?: ShuttleUI.Theme) {
  const Text = createBox<RNTextProps, TextStyleProps>(defaultTheme);

  Text.styleFunction = textStyleFunction;

  Text.defaultProps = {
    Component: RNText,
  };

  return Text;
}
