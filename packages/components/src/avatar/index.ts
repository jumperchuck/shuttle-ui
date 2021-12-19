import Avatar, { AvatarProps } from './Avatar';
import AvatarBadge, { AvatarBadgeProps } from './AvatarBadge';
import AvatarGroup, { AvatarGroupProps } from './AvatarGroup';

export default Object.assign(Avatar, {
  Badge: AvatarBadge,
  Group: AvatarGroup,
});

export type { AvatarProps, AvatarBadgeProps, AvatarGroupProps };
