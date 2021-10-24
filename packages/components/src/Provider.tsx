import React from 'react';
import { DefaultTheme, ThemeProvider } from '@shuttle-ui/theme';

import Overlay from './overlay';

export interface ProviderProps {
  theme?: ShuttleUI.Theme;
}

const Provider: React.FC<ProviderProps> = (props) => {
  const { theme = DefaultTheme, children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Overlay.Parent>{children}</Overlay.Parent>
    </ThemeProvider>
  );
};

export default Provider;
