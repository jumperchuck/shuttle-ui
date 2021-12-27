import React from 'react';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIComponent } from '../types';
import { Badge, BadgeProps } from '../badge/Badge';

export interface AvatarBadgeProps extends BadgeProps {}

export const AvatarBadge: ShuttleUIComponent<AvatarBadgeProps> = (props) => {
  const { children, ...rest } = useThemeConfigProps('AvatarBadge', props);
  return (
    <Badge position="absolute" right={0} bottom={0} size={10} {...rest}>
      {children}
    </Badge>
  );
};

export default withColorMode(withTheme(AvatarBadge, 'AvatarBadge'));
