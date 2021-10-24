import { PropType } from './style';
export interface SizingStyleProps {
  width?: PropType;
  maxWidth?: PropType;
  minWidth?: PropType;
  height?: PropType;
  maxHeight?: PropType;
  minHeight?: PropType;
}
export declare const width: import('./style').StyleFunction<string | number>;
export declare const maxWidth: import('./style').StyleFunction<string | number>;
export declare const minWidth: import('./style').StyleFunction<string | number>;
export declare const height: import('./style').StyleFunction<string | number>;
export declare const maxHeight: import('./style').StyleFunction<string | number>;
export declare const minHeight: import('./style').StyleFunction<string | number>;
declare const _default: import('./style').StyleFunction<
  import('react-native').ViewStyle & import('react-native').TextStyle
>;
export default _default;
