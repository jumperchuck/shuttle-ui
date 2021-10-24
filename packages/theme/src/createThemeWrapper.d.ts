import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeContextType, WithThemeComponent } from './types';
export declare const createThemeWrapper: <T>(
  Context: React.Context<ThemeContextType<T>>,
) => {
  useTheme: {
    (): ThemeContextType<T>;
    <P extends {}>(themeKey?: string | undefined): ThemeContextType<T> & P;
    <P_1 extends {}>(props: P_1, themeKey: string): ThemeContextType<T> & P_1;
    <P_2 extends {}>(props: P_2, themeKey?: string | undefined): ThemeContextType<T> &
      P_2;
  };
  withTheme: <C extends React.ComponentType<any>>(
    WrappedComponent: C,
    themeKey?: string | undefined,
  ) => WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C, {}>;
};
export default createThemeWrapper;
