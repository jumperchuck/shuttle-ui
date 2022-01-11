import * as colors from './colors';
import DefaultTheme from './DefaultTheme';
import createColors from './createColors';
import createTheme from './createTheme';
import createThemeContext from './createThemeContext';
import { wrapper } from './createThemeWrapper';

export const {
  ThemeContext,
  ThemeProvider,
  ThemeConsumer,
  useTheme,
  useThemeComponent,
  useThemeDefaultProps,
  useThemeConfigProps,
  useThemeProps,
  withTheme,
  withThemeDefaultProps,
  withThemeConfigProps,
  withThemeProps,
} = createThemeContext(DefaultTheme);

export { colors, DefaultTheme, createColors, createTheme, createThemeContext, wrapper };

export * from './types';
