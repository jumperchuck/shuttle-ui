import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import { StyleFunction } from './style';
import compose from './compose';
import background, { BackgroundStyleProps } from './background';
import borders, { BordersStyleProps } from './borders';
import displays, { DisplaysStyleProps } from './displays';
import flexbox, { FlexboxStyleProps } from './flexbox';
import positions, { PositionsStyleProps } from './positions';
import sizing, { SizingStyleProps } from './sizing';
import spacing, { SpacingStyleProps } from './spacing';
import transform, { TransformStyleProps } from './transform';
import shadow, { ShadowStyleProps } from './shadow';

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

export type BoxProps<
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

export const boxStyleFunction = compose(
  background,
  borders,
  displays,
  flexbox,
  positions,
  sizing,
  spacing,
  transform,
  shadow,
);

export default function createBox<
  P = TouchableOpacityProps,
  S extends BoxStyleProps = BoxStyleProps,
>(defaultTheme?: ShuttleUI.Theme) {
  const Box: BoxFC<P, S> = (props) => {
    const {
      // @ts-ignore
      Component = props.onPress || props.onLongPress ? TouchableOpacity : View,
      style: styleProp,
      forwardedRef,
      ...other
    } = props;

    const style = [
      Box.styleFunction({ ...other, theme: other.theme || defaultTheme }),
      styleProp,
    ];

    const newProps = {
      ref: forwardedRef,
      forwardedRef,
      ...other,
      style,
    };

    if (typeof newProps.children === 'function') {
      newProps.children = newProps.children(newProps as any);
    }

    if (React.isValidElement(Component)) {
      return React.cloneElement(Component, newProps);
    }

    return <Component {...newProps} />;
  };

  Box.styleFunction = boxStyleFunction;

  return Box;
}
