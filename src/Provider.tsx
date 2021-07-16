import React from 'react';

import { ThemeProvider, ThemeProviderProps } from './themes';
import Overlay from './components/overlay';

export interface ProviderProps extends ThemeProviderProps {}

const Provider: React.FC<ProviderProps> = (props) => {
  const { theme, children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Overlay.Parent>{children}</Overlay.Parent>
    </ThemeProvider>
  );
};

export default Provider;
