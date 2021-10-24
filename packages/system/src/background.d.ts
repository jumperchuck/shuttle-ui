import { ImageSourcePropType } from 'react-native';
import { ColorPropType } from './types';
export interface BackgroundStyleProps {
  backgroundColor?: ColorPropType;
  bgColor?: ColorPropType;
  backgroundImage?: ImageSourcePropType;
  bgImage?: ImageSourcePropType;
}
export declare const bgColor: import('./style').StyleFunction<string>;
export declare const bgImage: import('./style').StyleFunction<undefined>;
declare const _default: import('./style').StyleFunction<
  import('react-native').ViewStyle & import('react-native').TextStyle
>;
export default _default;
