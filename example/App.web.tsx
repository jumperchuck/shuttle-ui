import React from 'react';
import { Provider } from 'shuttle-ui';
import '../src/registerRNIcons';

import StorybookUIRoot from './storybook';
import theme from './storybook/theme';

export default function App() {
  return (
    <Provider theme={theme}>
      <StorybookUIRoot />
    </Provider>
  );
}
