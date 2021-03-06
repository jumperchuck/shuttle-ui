import React, { useCallback, useState } from 'react';
import { deepMerge, RecursivePartial } from '@shuttle-ui/utils';

import { ThemeContextType, ThemeProviderProps } from './types';

export const createThemeProvider = <T,>(Context: React.Context<ThemeContextType<T>>) => {
  const Provider: React.FC<ThemeProviderProps<T>> = (props) => {
    const [theme, setTheme] = useState(props.theme);

    const updateTheme = useCallback(
      (updates: RecursivePartial<T>) => {
        setTheme(deepMerge(theme, updates as T));
      },
      [theme],
    );

    const replaceTheme = useCallback(
      (updates: RecursivePartial<T>) => {
        setTheme(deepMerge(props.theme, updates as T));
      },
      [props.theme],
    );

    return (
      <Context.Provider
        value={{
          theme: theme,
          updateTheme,
          replaceTheme,
        }}
      >
        {props.children}
      </Context.Provider>
    );
  };

  return Provider;
};

export default createThemeProvider;
