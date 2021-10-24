/// <reference types="react" />
/// <reference types="hoist-non-react-statics" />
import { ThemeContextType } from './types';
export declare const createThemeContext: <T>(defaultTheme: T) => {
  ThemeContext: import('react').Context<ThemeContextType<T>>;
  ThemeProvider: import('react').FC<import('./types').ThemeProviderProps<T>>;
  ThemeConsumer: import('react').Consumer<ThemeContextType<T>>;
  useTheme: {
    (): ThemeContextType<T>;
    <P extends {}>(themeKey?: string | undefined): ThemeContextType<T> & P;
    <P_1 extends {}>(props: P_1, themeKey: string): ThemeContextType<T> & P_1;
    <P_2 extends {}>(props: P_2, themeKey?: string | undefined): ThemeContextType<T> &
      P_2;
  };
  withTheme: <C extends import('react').ComponentType<any>>(
    WrappedComponent: C,
    themeKey?: string | undefined,
  ) => import('./types').WithThemeComponent<C> &
    import('hoist-non-react-statics').NonReactStatics<C, {}>;
};
export default createThemeContext;
