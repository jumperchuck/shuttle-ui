import { DividerProps } from '../divider';

export type DividerTheme = ShuttleUI.ThemeComponent<DividerProps>;

const divider: DividerTheme = {
  defaultProps: {
    color: 'grey.400',
  },
  propConfigs: {},
  configPriorities: [],
};

export default divider;
