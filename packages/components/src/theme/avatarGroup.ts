import { AvatarGroupProps } from '../avatar';

export type AvatarGroupTheme = ShuttleUI.ThemeComponent<AvatarGroupProps>;

const avatarGroup: AvatarGroupTheme = {
  defaultProps: {
    direction: 'row',
    spacing: -10,
    avatarProps: {
      borderWidth: 1,
      borderColor: 'white',
    },
  },
  propConfigs: {},
  configPriorities: [],
};

export default avatarGroup;
