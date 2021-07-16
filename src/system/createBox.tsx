import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import { Theme } from '../themes';
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
  children?: React.ReactNode;
} & P &
  S;

export interface BoxFC<
  P = TouchableOpacityProps,
  S extends BoxStyleProps = BoxStyleProps,
  O = { theme: Theme },
> {
  <V = P>(props: BoxProps<V, S> & O): React.ReactElement<any, any> | null;
  styleFunction: StyleFunction<ViewStyle | TextStyle>;
  defaultProps?: Partial<BoxProps<P, S>>;
  displayName?: string;
}

export default function createBox<
  P = TouchableOpacityProps,
  S extends BoxStyleProps = BoxStyleProps,
>(...styleFns: StyleFunction[]) {
  const styleFunction = compose(
    ...background,
    ...borders,
    ...displays,
    ...flexbox,
    ...positions,
    ...sizing,
    ...spacing,
    ...transform,
    ...shadow,
    ...styleFns,
  );

  const Box: BoxFC<P, S> = (props) => {
    const {
      // @ts-ignore
      onPress,
      // @ts-ignore
      onLongPress,
      // @ts-ignore
      style: styleProp,
      Component = onPress || onLongPress ? TouchableOpacity : View,
      forwardedRef,
      ...other
    } = props;

    const style = [styleFunction(other), styleProp];

    if (React.isValidElement(Component)) {
      return React.cloneElement(Component, {
        ref: forwardedRef,
        forwardedRef,
        onPress,
        onLongPress,
        ...other,
        style,
      });
    }

    return (
      <Component
        ref={forwardedRef}
        forwardedRef={forwardedRef}
        onPress={onPress}
        onLongPress={onLongPress}
        {...other}
        style={style}
      />
    );
  };

  Box.styleFunction = styleFunction;

  return Box;
}
