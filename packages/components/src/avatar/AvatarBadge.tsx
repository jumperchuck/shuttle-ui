import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Badge, BadgeProps } from '../badge/Badge';

export interface AvatarBadgeProps extends BadgeProps {}

export const AvatarBadge: ShuttleUIComponent<AvatarBadgeProps> = (props) => {
  const { children, ...rest } = useResolutionProps('AvatarBadge', props);
  return (
    <Badge position="absolute" right={0} bottom={0} size={10} {...rest}>
      {children}
    </Badge>
  );
};

export default withShuttleUI(AvatarBadge);
