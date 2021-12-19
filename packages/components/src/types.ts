import React from 'react';

import { AvatarTheme } from './theme/avatar';
import { AvatarBadgeTheme } from './theme/avatarBadge';
import { AvatarGroupTheme } from './theme/avatarGroup';
import { ButtonTheme } from './theme/button';
import { ButtonGroupTheme } from './theme/buttonGroup';
import { SpaceTheme } from './theme/space';

export type ShuttleUIProps<T> = T & { theme: ShuttleUI.Theme; colorMode?: string | null };

export type ShuttleUIComponent<T> = React.FC<ShuttleUIProps<T>>;

declare global {
  namespace ShuttleUI {
    interface ThemeComponents {
      Avatar: AvatarTheme;
      AvatarBadge: AvatarBadgeTheme;
      AvatarGroup: AvatarGroupTheme;
      Button: ButtonTheme;
      ButtonGroup: ButtonGroupTheme;
      Space: SpaceTheme;
    }
  }
}
