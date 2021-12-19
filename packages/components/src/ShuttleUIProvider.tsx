import React from 'react';
import { ColorModeProvider, ColorModeProviderProps } from '@shuttle-ui/color-mode';
import { DefaultTheme, ThemeProvider, ThemeProviderProps } from '@shuttle-ui/theme';

import Overlay from './overlay';

export interface ShuttleUIProviderProps
  extends Partial<ThemeProviderProps<ShuttleUI.Theme>>,
    Partial<ColorModeProviderProps> {}

const ShuttleUIProvider: React.FC<ShuttleUIProviderProps> = (props) => {
  const { theme = DefaultTheme, colorMode, children } = props;
  return (
    <ColorModeProvider colorMode={colorMode}>
      <ThemeProvider theme={theme}>
        <Overlay.Parent>{children}</Overlay.Parent>
      </ThemeProvider>
    </ColorModeProvider>
  );
};

export default ShuttleUIProvider;
