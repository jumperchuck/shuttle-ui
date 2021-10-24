import { SpacingPropType } from './types';
export interface SpacingStyleProps {
  m?: SpacingPropType;
  margin?: SpacingPropType;
  mt?: SpacingPropType;
  marginTop?: SpacingPropType;
  mb?: SpacingPropType;
  marginBottom?: SpacingPropType;
  ml?: SpacingPropType;
  marginLeft?: SpacingPropType;
  mr?: SpacingPropType;
  marginRight?: SpacingPropType;
  marginHorizontal?: SpacingPropType;
  mx?: SpacingPropType;
  marginX?: SpacingPropType;
  marginVertical?: SpacingPropType;
  my?: SpacingPropType;
  marginY?: SpacingPropType;
  p?: SpacingPropType;
  padding?: SpacingPropType;
  pt?: SpacingPropType;
  paddingTop?: SpacingPropType;
  pb?: SpacingPropType;
  paddingBottom?: SpacingPropType;
  pl?: SpacingPropType;
  paddingLeft?: SpacingPropType;
  pr?: SpacingPropType;
  paddingRight?: SpacingPropType;
  paddingHorizontal?: SpacingPropType;
  px?: SpacingPropType;
  paddingX?: SpacingPropType;
  paddingVertical?: SpacingPropType;
  py?: SpacingPropType;
  paddingY?: SpacingPropType;
}
export declare const margin: import('./style').StyleFunction<import('./style').PropType>;
export declare const marginTop: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const marginBottom: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const marginLeft: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const marginRight: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const marginX: import('./style').StyleFunction<import('./style').PropType>;
export declare const marginY: import('./style').StyleFunction<import('./style').PropType>;
export declare const padding: import('./style').StyleFunction<import('./style').PropType>;
export declare const paddingTop: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const paddingBottom: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const paddingLeft: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const paddingRight: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const paddingX: import('./style').StyleFunction<
  import('./style').PropType
>;
export declare const paddingY: import('./style').StyleFunction<
  import('./style').PropType
>;
declare const _default: import('./style').StyleFunction<
  import('react-native').ViewStyle & import('react-native').TextStyle
>;
export default _default;
