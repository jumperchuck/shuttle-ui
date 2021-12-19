import React from 'react';
import { useColorScheme } from 'react-native';
import { ShuttleUIProvider } from '@shuttle-ui/components';
import '@shuttle-ui/components/dist/registerRNIcons';

import StorybookUIRoot from './storybook';
import theme from './storybook/theme';

export default function App() {
  const colorMode = useColorScheme();
  return (
    <ShuttleUIProvider theme={theme} colorMode={colorMode}>
      <StorybookUIRoot />
    </ShuttleUIProvider>
  );
}
