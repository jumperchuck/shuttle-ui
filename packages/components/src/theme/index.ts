import { DefaultTheme } from '@shuttle-ui/theme';

import avatar from './avatar';
import avatarBadge from './avatarBadge';
import avatarGroup from './avatarGroup';
import badge from './badge';
import box from './box';
import button from './button';
import buttonGroup from './buttonGroup';
import divider from './divider';
import space from './space';

const components = {
  Avatar: avatar,
  AvatarBadge: avatarBadge,
  AvatarGroup: avatarGroup,
  Badge: badge,
  Box: box,
  Button: button,
  ButtonGroup: buttonGroup,
  Divider: divider,
  Space: space,
};

Object.assign(DefaultTheme, {
  components,
});

export type ShuttleUIThemeComponents = typeof components;

export * from '@shuttle-ui/theme';
