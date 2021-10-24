import { ViewStyle } from 'react-native';
export interface FlexboxStyleProps {
  center?: boolean;
  flex?: ViewStyle['flex'];
  flexWrap?: ViewStyle['flexWrap'];
  flexDirection?: ViewStyle['flexDirection'];
  flexBasis?: ViewStyle['flexBasis'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignContent?: ViewStyle['alignContent'];
  alignSelf?: ViewStyle['alignSelf'];
}
export declare const center: import('./style').StyleFunction<ViewStyle>;
export declare const flex: import('./style').StyleFunction<number | undefined>;
export declare const flexWrap: import('./style').StyleFunction<
  'wrap' | 'nowrap' | 'wrap-reverse' | undefined
>;
export declare const flexDirection: import('./style').StyleFunction<
  'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined
>;
export declare const flexBasis: import('./style').StyleFunction<
  string | number | undefined
>;
export declare const flexGrow: import('./style').StyleFunction<number | undefined>;
export declare const flexShrink: import('./style').StyleFunction<number | undefined>;
export declare const justifyContent: import('./style').StyleFunction<
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined
>;
export declare const alignItems: import('./style').StyleFunction<
  import('react-native').FlexAlignType | undefined
>;
export declare const alignContent: import('./style').StyleFunction<
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | undefined
>;
export declare const alignSelf: import('./style').StyleFunction<
  'auto' | import('react-native').FlexAlignType | undefined
>;
declare const _default: import('./style').StyleFunction<
  ViewStyle & import('react-native').TextStyle
>;
export default _default;
