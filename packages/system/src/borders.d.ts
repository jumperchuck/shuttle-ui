import { ViewStyle } from 'react-native';
import { BorderPropType, ColorPropType, RadiusPropType } from './types';
export interface BordersStyleProps {
  border?: BorderPropType;
  borderTop?: BorderPropType;
  borderBottom?: BorderPropType;
  borderLeft?: BorderPropType;
  borderRight?: BorderPropType;
  borderRadius?: RadiusPropType;
  borderTopRadius?: RadiusPropType;
  borderBottomRadius?: RadiusPropType;
  borderLeftRadius?: RadiusPropType;
  borderRightRadius?: RadiusPropType;
  borderColor?: ColorPropType;
  borderWidth?: number;
  borderStyle?: ViewStyle['borderStyle'];
}
export declare const border: import('./style').StyleFunction<ViewStyle>;
export declare const borderTop: import('./style').StyleFunction<ViewStyle>;
export declare const borderBottom: import('./style').StyleFunction<ViewStyle>;
export declare const borderLeft: import('./style').StyleFunction<ViewStyle>;
export declare const borderRight: import('./style').StyleFunction<ViewStyle>;
export declare const borderRadius: import('./style').StyleFunction<number | ViewStyle>;
export declare const borderTopRadius: import('./style').StyleFunction<number | ViewStyle>;
export declare const borderBottomRadius: import('./style').StyleFunction<
  number | ViewStyle
>;
export declare const borderLeftRadius: import('./style').StyleFunction<
  number | ViewStyle
>;
export declare const borderRightRadius: import('./style').StyleFunction<
  number | ViewStyle
>;
export declare const borderColor: import('./style').StyleFunction<string>;
export declare const borderWidth: import('./style').StyleFunction<number>;
export declare const borderStyle: import('./style').StyleFunction<
  'solid' | 'dotted' | 'dashed' | undefined
>;
declare const _default: import('./style').StyleFunction<
  ViewStyle & import('react-native').TextStyle
>;
export default _default;
