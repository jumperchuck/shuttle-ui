/// <reference types="react" />
/// <reference types="hoist-non-react-statics" />
import * as colors from './colors';
import DefaultTheme from './DefaultTheme';
import createTheme from './createTheme';
import createThemeContext from './createThemeContext';
export declare const ThemeContext: import('react').Context<
    import('./types').ThemeContextType<ShuttleUI.Theme>
  >,
  ThemeProvider: import('react').FC<
    import('./types').ThemeProviderProps<ShuttleUI.Theme>
  >,
  ThemeConsumer: import('react').Consumer<
    import('./types').ThemeContextType<ShuttleUI.Theme>
  >,
  useTheme: {
    (): import('./types').ThemeContextType<ShuttleUI.Theme>;
    <P extends {}>(
      themeKey?: string | undefined,
    ): import('./types').ThemeContextType<ShuttleUI.Theme> & P;
    <P_1 extends {}>(
      props: P_1,
      themeKey: string,
    ): import('./types').ThemeContextType<ShuttleUI.Theme> & P_1;
    <P_2 extends {}>(
      props: P_2,
      themeKey?: string | undefined,
    ): import('./types').ThemeContextType<ShuttleUI.Theme> & P_2;
  },
  withTheme: <C extends import('react').ComponentType<any>>(
    WrappedComponent: C,
    themeKey?: string | undefined,
  ) => import('./types').WithThemeComponent<C> &
    import('hoist-non-react-statics').NonReactStatics<C, {}>;
export { colors, DefaultTheme, createTheme, createThemeContext };
export * from './types';
