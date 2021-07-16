import { StyleSheet } from 'react-native';

import { Theme } from './theme';
import { useTheme } from './useTheme';

export function makeStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
  V,
>(styles: T | ((theme: Theme, props: V) => T)) {
  return (props: V = {} as any): T => {
    const { theme } = useTheme();
    const css = typeof styles === 'function' ? styles(theme, props) : styles;

    return StyleSheet.create(css);
  };
}
