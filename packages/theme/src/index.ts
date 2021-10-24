import * as colors from './colors';
import DefaultTheme from './DefaultTheme';
import createTheme from './createTheme';
import createThemeContext from './createThemeContext';

export const { ThemeContext, ThemeProvider, ThemeConsumer, useTheme, withTheme } =
  createThemeContext(DefaultTheme);

export { colors, DefaultTheme, createTheme, createThemeContext };

export * from './types';
