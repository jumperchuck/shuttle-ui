import { deepMerge, RecursivePartial } from '@shuttle-ui/utils';

import DefaultTheme from './DefaultTheme';

export default function createTheme(theme: RecursivePartial<ShuttleUI.Theme>) {
  return deepMerge(DefaultTheme, theme) as ShuttleUI.Theme;
}
