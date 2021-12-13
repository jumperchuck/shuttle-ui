import React from 'react';
import { withTheme } from '@shuttle-ui/theme';

import { Badge, BadgeProps } from '../badge';

export interface AvatarBadgeProps extends BadgeProps {}

export const AvatarBadge: React.FC<AvatarBadgeProps & { theme: ShuttleUI.Theme }> = (
  props,
) => {
  return <Badge position="absolute" right={0} bottom={0} size={10} {...props} />;
};

export default withTheme(AvatarBadge, 'AvatarBadge');
