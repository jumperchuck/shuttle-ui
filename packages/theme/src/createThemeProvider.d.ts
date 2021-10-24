import React from 'react';
import { ThemeContextType, ThemeProviderProps } from './types';
export declare const createThemeProvider: <T>(
  Context: React.Context<ThemeContextType<T>>,
) => React.FC<ThemeProviderProps<T>>;
export default createThemeProvider;
