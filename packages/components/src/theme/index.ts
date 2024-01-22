import { DefaultTheme } from '@shuttle-ui/theme';

import actionSheetItem from './actionSheetItem';
import button from './button';
import checkbox from './checkbox';
import toast from './toast';
import space from './space';

const components = {
  ActionSheetItem: actionSheetItem,
  Button: button,
  Checkbox: checkbox,
  Toast: toast,
  Space: space,
};

Object.assign(DefaultTheme, {
  components,
});

export * from '@shuttle-ui/theme';
