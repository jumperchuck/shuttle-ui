import { ButtonGroupProps } from '../button';

export type ButtonGroupTheme = ShuttleUI.ThemeComponent<ButtonGroupProps>;

const buttonGroupTheme: ButtonGroupTheme = {
  defaultProps: {
    direction: 'row',
    selectedProps: {
      color: 'accent',
    },
  },
  propConfigs: {},
  configPriorities: [],
};

export default buttonGroupTheme;
