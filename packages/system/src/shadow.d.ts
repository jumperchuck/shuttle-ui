import { ShadowStyleIOS, TextStyle } from 'react-native';
import { ShadowPropType } from './types';
export interface ShadowStyleProps {
  boxShadow?: ShadowPropType | BoxShadowStyle;
  textShadow?: ShadowPropType | TextShadowStyle;
  elevation?: number;
}
export interface BoxShadowStyle extends ShadowStyleIOS {
  elevation?: number;
}
export interface TextShadowStyle {
  textShadowColor?: TextStyle['textShadowColor'];
  textShadowOffset?: TextStyle['textShadowOffset'];
  textShadowRadius?: TextStyle['textShadowRadius'];
}
export declare const boxShadow: import('./style').StyleFunction<BoxShadowStyle>;
export declare const textShadow: import('./style').StyleFunction<TextShadowStyle>;
export declare const elevation: import('./style').StyleFunction<BoxShadowStyle>;
declare const _default: import('./style').StyleFunction<
  import('react-native').ViewStyle & TextStyle
>;
export default _default;
