import React from 'react';
import { Provider } from '@shuttle-ui/components';
// import '@shuttle-ui/core/src/registerRNIcons';

import StorybookUIRoot from './storybook';
import theme from './storybook/theme';

export default function App() {
  return (
    <Provider theme={theme}>
      <StorybookUIRoot />
    </Provider>
  );
}
