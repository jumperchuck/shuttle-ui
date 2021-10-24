import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { StyleFunction } from './style';
import { BackgroundStyleProps } from './background';
import { BordersStyleProps } from './borders';
import { DisplaysStyleProps } from './displays';
import { FlexboxStyleProps } from './flexbox';
import { PositionsStyleProps } from './positions';
import { SizingStyleProps } from './sizing';
import { SpacingStyleProps } from './spacing';
import { TransformStyleProps } from './transform';
import { ShadowStyleProps } from './shadow';
export interface BoxStyleProps
  extends BackgroundStyleProps,
    BordersStyleProps,
    DisplaysStyleProps,
    FlexboxStyleProps,
    PositionsStyleProps,
    SizingStyleProps,
    SpacingStyleProps,
    TransformStyleProps,
    ShadowStyleProps {
  style?: StyleProp<ViewStyle>;
}
export declare type BoxProps<
  P = TouchableOpacityProps,
  S extends BoxStyleProps = BoxStyleProps,
> = {
  Component?: any;
  forwardedRef?: React.LegacyRef<any>;
  children?: React.ReactNode | ((props: BoxProps<P, S>) => React.ReactNode);
  theme?: ShuttleUI.Theme;
} & P &
  S;
export interface BoxFC<
  P = TouchableOpacityProps,
  S extends BoxStyleProps = BoxStyleProps,
> {
  <V = P>(props: BoxProps<V, S>): React.ReactElement<any, any> | null;
  styleFunction: StyleFunction<ViewStyle & TextStyle>;
  defaultProps?: Partial<BoxProps<P, S>>;
  displayName?: string;
}
export declare const boxStyleFunction: StyleFunction<ViewStyle & TextStyle>;
export default function createBox<
  P = TouchableOpacityProps,
  S extends BoxStyleProps = BoxStyleProps,
>(defaultTheme?: ShuttleUI.Theme): BoxFC<P, S>;
