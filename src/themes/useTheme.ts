import { useContext } from 'react';

import { getPath, mergeProps } from '../utils';
import { ThemeContext, ThemeContextType } from './ThemeProvider';

export function useTheme(): ThemeContextType;
export function useTheme<P = any>(themeKey?: string): ThemeContextType & P;
export function useTheme<P = any>(props: P, themeKey?: string): ThemeContextType & P;
export function useTheme<P = any>(props?: P, themeKey?: string): ThemeContextType {
  const context = useContext(ThemeContext);
  const p = typeof props === 'object' ? props : null;
  const key =
    typeof props === 'string' ? props : typeof themeKey === 'string' ? themeKey : null;
  if (p || key) {
    return {
      ...mergeProps(p || {}, getPath(context.theme, `props.${key}`)),
      ...context,
    };
  }
  return context;
}
