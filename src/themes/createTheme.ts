import deepmerge from 'deepmerge';

import DefaultTheme from './DefaultTheme';
import { RecursivePartial, Theme } from './theme';

export function createTheme(theme: RecursivePartial<Theme>) {
  return deepmerge(DefaultTheme, theme) as Theme;
}
