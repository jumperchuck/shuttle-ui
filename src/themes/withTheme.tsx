import React, { ComponentType, ComponentProps, FC } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { BoxFC } from '../system';
import { ThemeContextType } from './ThemeProvider';
import { useTheme } from './useTheme';

export type WithThemeComponent<C extends ComponentType> = C extends BoxFC<
  infer P,
  infer S,
  infer O
>
  ? BoxFC<WithThemeProps<P>, WithThemeProps<S>, WithThemeProps<O>>
  : FC<WithThemeProps<ComponentProps<C>>>;

export type WithThemeProps<P> = Omit<P, keyof ThemeContextType>;

export const isClassComponent = (Component: any) =>
  Component.prototype && Component.prototype.isReactComponent;

export const isRefComponent = (Component: any) =>
  Component.$$typeof === Symbol.for('react.forward_ref');

export const withTheme = <C extends ComponentType<any>, P = ComponentProps<C>>(
  WrappedComponent: C,
  themeKey?: string,
): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> => {
  const needForwardRef =
    isClassComponent(WrappedComponent) || isRefComponent(WrappedComponent);

  const Component = (props: any, ref: any) => {
    const { children, ...rest } = props as any;
    const newProps = useTheme(rest, themeKey);
    if (needForwardRef) {
      return <WrappedComponent ref={ref} {...newProps} children={children} />;
    }
    return <WrappedComponent {...newProps} children={children} />;
  };

  if (needForwardRef) {
    // @ts-ignore
    return hoistNonReactStatics(React.forwardRef<C, P>(Component), WrappedComponent);
  }

  // @ts-ignore
  return hoistNonReactStatics(Component, WrappedComponent);
};
