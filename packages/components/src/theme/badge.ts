import { BadgeProps } from '../badge';

export type BadgeTheme = ShuttleUI.ThemeComponent<BadgeProps>;

const badge: BadgeTheme = {
  defaultProps: {
    bgColor: 'red.600',
  },
  propConfigs: {},
  configPriorities: [],
};

export default badge;
