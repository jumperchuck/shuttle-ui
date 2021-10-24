import React, { ComponentType, useContext } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { mergeProps, getPath } from '@shuttle-ui/utils';

import { ThemeContextType, WithThemeComponent } from './types';

const isClassComponent = (Component: any) =>
  Component.prototype && Component.prototype.isReactComponent;

const isRefComponent = (Component: any) =>
  Component.$$typeof === Symbol.for('react.forward_ref');

export const createThemeWrapper = <T,>(Context: React.Context<ThemeContextType<T>>) => {
  function useTheme(): ThemeContextType<T>;
  function useTheme<P extends {}>(themeKey?: string): ThemeContextType<T> & P;
  function useTheme<P extends {}>(props: P, themeKey: string): ThemeContextType<T> & P;
  function useTheme<P extends {}>(props: P, themeKey?: string): ThemeContextType<T> & P;
  function useTheme<P extends {}>(props?: P, themeKey?: string): ThemeContextType<T> {
    const context = useContext(Context);
    const key =
      typeof props === 'string' ? props : typeof themeKey === 'string' ? themeKey : null;
    if (key) {
      return {
        ...mergeProps(
          typeof props === 'object' ? props : {},
          getPath(context.theme, `props.${key}`),
        ),
        ...context,
      };
    }
    return context;
  }

  function withTheme<C extends ComponentType<any>>(
    WrappedComponent: C,
    themeKey?: string,
  ): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
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
      return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent) as any;
    }

    return hoistNonReactStatics(Component, WrappedComponent);
  }

  return { useTheme, withTheme };
};

export default createThemeWrapper;
