import { DefaultTheme } from '@shuttle-ui/theme';

import button from './button';
import toast from './toast';
import space from './space';

const components = {
  Button: button,
  Toast: toast,
  Space: space,
};

Object.assign(DefaultTheme, {
  components,
});

export * from '@shuttle-ui/theme';
