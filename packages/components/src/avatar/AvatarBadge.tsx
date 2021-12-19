import React from 'react';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { Badge, BadgeProps } from '../badge';
import { ShuttleUIProps } from '../types';

export interface AvatarBadgeProps extends BadgeProps {}

export const AvatarBadge = (props: ShuttleUIProps<AvatarBadgeProps>) => {
  return <Badge position="absolute" right={0} bottom={0} {...props} />;
};

export default withColorMode(withTheme(AvatarBadge, 'AvatarBadge'));
