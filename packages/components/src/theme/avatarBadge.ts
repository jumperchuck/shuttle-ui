import { AvatarBadgeProps } from '../avatar';

export type AvatarBadgeTheme = ShuttleUI.ThemeComponent<AvatarBadgeProps>;

const avatarBadge: AvatarBadgeTheme = {
  defaultProps: {
    size: 10,
  },
  propConfigs: {},
  configPriorities: [],
};

export default avatarBadge;
