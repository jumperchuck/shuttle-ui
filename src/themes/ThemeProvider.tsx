import React, { useCallback, useState } from 'react';
import deepmerge from 'deepmerge';

import DefaultTheme from './DefaultTheme';
import { Theme, RecursivePartial } from './theme';

export type ThemeContextType = {
  theme: Theme;
  updateTheme: (updates: RecursivePartial<Theme>) => void;
  replaceTheme: (updates: RecursivePartial<Theme>) => void;
};

export interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: DefaultTheme,
  updateTheme: () => {},
  replaceTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = useState(props.theme);

  const updateTheme = useCallback(
    (updates: RecursivePartial<Theme>) => {
      setTheme(deepmerge(theme, updates) as Theme);
    },
    [theme],
  );

  const replaceTheme = useCallback(
    (updates: RecursivePartial<Theme>) => {
      setTheme(deepmerge(props.theme, updates) as Theme);
    },
    [props.theme],
  );

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        updateTheme,
        replaceTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;
