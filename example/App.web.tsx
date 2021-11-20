import React from 'react';
import { Provider } from '@shuttle-ui/components';
import '@shuttle-ui/components/dist/registerRNIcons';

import StorybookUIRoot from './storybook';
import theme from './storybook/theme';

export default function App() {
  return (
    <Provider theme={theme}>
      <StorybookUIRoot />
    </Provider>
  );
}
