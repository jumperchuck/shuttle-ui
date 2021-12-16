import React, { useCallback, useState } from 'react';

import { ColorModeContext } from './colorModeContext';
import { ColorModeProviderProps } from './types';

export const ColorModeProvider: React.FC<ColorModeProviderProps> = (props) => {
  const [colorMode, setColorMode] = useState(props.colorMode);

  const toggleColorMode = useCallback(() => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  }, [colorMode]);

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode,
        toggleColorMode,
      }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
};
