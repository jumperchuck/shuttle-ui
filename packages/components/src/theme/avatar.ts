import { AvatarProps } from '../avatar';

export type AvatarTheme = ShuttleUI.ThemeComponent<AvatarProps>;

const avatar: AvatarTheme = {
  defaultProps: {
    size: 40,
    bgColor: 'grey.400',
  },
  propConfigs: {},
  configPriorities: [],
};

export default avatar;
