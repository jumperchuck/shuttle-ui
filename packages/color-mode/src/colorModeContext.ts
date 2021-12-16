import { createContext } from 'react';

import { ColorModeContextType } from './types';

export const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: undefined,
  toggleColorMode: () => {},
  setColorMode: () => {},
});

export const ColorModeConsumer = ColorModeContext.Consumer;
