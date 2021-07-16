import React from 'react';
import { I18nManager } from 'react-native';
import { Provider } from 'shuttle-ui';
import '../src/registerRNIcons';

import StorybookUIRoot from './storybook';
import theme from './storybook/theme';

I18nManager.forceRTL(false);

export default function App() {
  return (
    <Provider theme={theme}>
      <StorybookUIRoot />
    </Provider>
  );
}
