import { createContext } from 'react';

import { ThemeContextType } from './types';
import createThemeProvider from './createThemeProvider';
import createThemeWrapper from './createThemeWrapper';

export const createThemeContext = <T>(defaultTheme: T) => {
  const ThemeContext = createContext<ThemeContextType<T>>({
    theme: defaultTheme,
    updateTheme: () => {},
    replaceTheme: () => {},
  });
  const ThemeProvider = createThemeProvider(ThemeContext);
  const ThemeConsumer = ThemeContext.Consumer;
  return {
    ThemeContext,
    ThemeProvider,
    ThemeConsumer,
    ...createThemeWrapper(ThemeContext),
  };
};

export default createThemeContext;
