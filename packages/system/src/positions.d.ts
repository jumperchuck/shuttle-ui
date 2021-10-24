import { ViewStyle } from 'react-native';
import { SpacingPropType } from './types';
export interface PositionsStyleProps {
  position?: ViewStyle['position'];
  zIndex?: ViewStyle['zIndex'];
  top?: SpacingPropType;
  bottom?: SpacingPropType;
  left?: SpacingPropType;
  right?: SpacingPropType;
}
export declare const position: import('./style').StyleFunction<
  'absolute' | 'relative' | undefined
>;
export declare const zIndex: import('./style').StyleFunction<number | undefined>;
export declare const top: import('./style').StyleFunction<SpacingPropType>;
export declare const bottom: import('./style').StyleFunction<SpacingPropType>;
export declare const left: import('./style').StyleFunction<SpacingPropType>;
export declare const right: import('./style').StyleFunction<SpacingPropType>;
declare const _default: import('./style').StyleFunction<
  ViewStyle & import('react-native').TextStyle
>;
export default _default;
