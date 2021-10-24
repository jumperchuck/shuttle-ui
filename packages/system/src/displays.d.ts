import { ViewStyle } from 'react-native';
export interface DisplaysStyleProps {
  display?: ViewStyle['display'];
  overflow?: ViewStyle['overflow'];
  opacity?: number;
}
export declare const display: import('./style').StyleFunction<
  'flex' | 'none' | undefined
>;
export declare const overflow: import('./style').StyleFunction<
  'visible' | 'hidden' | 'scroll' | undefined
>;
export declare const opacity: import('./style').StyleFunction<number>;
declare const _default: import('./style').StyleFunction<
  ViewStyle & import('react-native').TextStyle
>;
export default _default;
