import { StyleProp, TextProps as RNTextProps, TextStyle } from 'react-native';
import { BoxProps, BoxStyleProps } from './createBox';
import { TypographyStyleProps } from './typography';
export interface TextStyleProps extends BoxStyleProps, TypographyStyleProps {
  style?: StyleProp<TextStyle>;
}
export interface TextProps extends BoxProps<RNTextProps, TextStyleProps> {}
export declare const textStyleFunction: import('./style').StyleFunction<
  import('react-native').ViewStyle & TextStyle
>;
export default function createText(
  defaultTheme?: ShuttleUI.Theme,
): import('./createBox').BoxFC<RNTextProps, TextStyleProps>;
