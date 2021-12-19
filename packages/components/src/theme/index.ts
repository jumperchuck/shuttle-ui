import { DefaultTheme } from '@shuttle-ui/theme';

import avatar from './avatar';
import avatarBadge from './avatarBadge';
import avatarGroup from './avatarGroup';
import button from './button';
import buttonGroup from './buttonGroup';
import space from './space';

Object.assign(DefaultTheme, {
  components: {
    Avatar: avatar,
    AvatarBadge: avatarBadge,
    AvatarGroup: avatarGroup,
    Button: button,
    ButtonGroup: buttonGroup,
    Space: space,
  },
});

export * from '@shuttle-ui/theme';
