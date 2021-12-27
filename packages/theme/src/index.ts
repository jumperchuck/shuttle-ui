import * as colors from './colors';
import DefaultTheme from './DefaultTheme';
import createColors from './createColors';
import createTheme from './createTheme';
import createThemeContext from './createThemeContext';

export const {
  ThemeContext,
  ThemeProvider,
  ThemeConsumer,
  useTheme,
  useThemeComponent,
  useThemeDefaultProps,
  useThemeConfigProps,
  withTheme,
} = createThemeContext(DefaultTheme);

export { colors, DefaultTheme, createColors, createTheme, createThemeContext };

export * from './types';
