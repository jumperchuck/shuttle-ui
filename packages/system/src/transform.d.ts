import { ViewStyle } from 'react-native';
export interface TransformStyleProps {
  perspective?: number;
  rotate?: string;
  rotateX?: string;
  rotateY?: string;
  rotateZ?: string;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  translateX?: number;
  translateY?: number;
  skewX?: string;
  skewY?: string;
  matrix?: number[];
}
export declare const perspective: import('./style').StyleFunction<ViewStyle>;
export declare const rotate: import('./style').StyleFunction<ViewStyle>;
export declare const rotateX: import('./style').StyleFunction<ViewStyle>;
export declare const rotateY: import('./style').StyleFunction<ViewStyle>;
export declare const rotateZ: import('./style').StyleFunction<ViewStyle>;
export declare const scale: import('./style').StyleFunction<ViewStyle>;
export declare const scaleX: import('./style').StyleFunction<ViewStyle>;
export declare const scaleY: import('./style').StyleFunction<ViewStyle>;
export declare const translateX: import('./style').StyleFunction<ViewStyle>;
export declare const translateY: import('./style').StyleFunction<ViewStyle>;
export declare const skewX: import('./style').StyleFunction<ViewStyle>;
export declare const skewY: import('./style').StyleFunction<ViewStyle>;
export declare const matrix: import('./style').StyleFunction<ViewStyle>;
declare const _default: import('./style').StyleFunction<
  ViewStyle & import('react-native').TextStyle
>;
export default _default;
