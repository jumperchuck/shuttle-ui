import { ToastProps } from '../toast';

export type ToastTheme = ShuttleUI.ThemeComponent<ToastProps>;

const toastTheme: ToastTheme = {
  defaultProps: {},
  propConfigs: {
    position: {
      top: {
        top: 30,
      },
      'top-left': {
        top: 30,
        left: 10,
      },
      'top-right': {
        top: 30,
        right: 10,
      },
      bottom: {
        bottom: 30,
      },
      'bottom-left': {
        bottom: 30,
        left: 10,
      },
      'bottom-right': {
        bottom: 30,
        right: 10,
      },
    },
  },
  configPriorities: [],
};

export default toastTheme;
