import React from 'react';

import { AvatarProps, AvatarBadgeProps, AvatarGroupProps } from './avatar';
import { BadgeProps } from './badge';
import { BoxProps } from './box';
import { ButtonProps, ButtonGroupProps } from './button';
import { CardProps, CardContentProps, CardCoverProps, CardTitleProps } from './card';
import {
  DialogProps,
  DialogActionsProps,
  DialogContentProps,
  DialogInputProps,
  DialogTitleProps,
} from './dialog';
import { DividerProps } from './divider';
import { GridProps } from './grid';
import { IconProps } from './icon';
import { ImageProps } from './image';
import { InputProps } from './input';
import { ModalProps } from './modal';
import { SpaceProps } from './space';
import { TextProps } from './text';
import { ToastProps } from './toast';

export type ShuttleUIProps<T> = T & {
  theme?: ShuttleUI.Theme;
  colorMode?: string | null;
  useDefaultProps?: boolean;
  useConfigProps?: boolean;
};

export type ShuttleUIComponent<T> = React.FC<ShuttleUIProps<T>>;

export type ShuttleUIThemeComponents<P extends {}> = {
  [K in keyof P]?: ShuttleUI.ThemeComponent<P[K]>;
};

declare global {
  namespace ShuttleUI {
    interface ThemeComponents
      extends ShuttleUIThemeComponents<{
        Avatar: AvatarProps;
        AvatarBadge: AvatarBadgeProps;
        AvatarGroup: AvatarGroupProps;
        Badge: BadgeProps;
        Box: BoxProps;
        Button: ButtonProps;
        ButtonGroup: ButtonGroupProps;
        Card: CardProps;
        CardContent: CardContentProps;
        CardCover: CardCoverProps;
        CardTitle: CardTitleProps;
        Dialog: DialogProps;
        DialogActions: DialogActionsProps;
        DialogContent: DialogContentProps;
        DialogInput: DialogInputProps;
        DialogTitle: DialogTitleProps;
        Divider: DividerProps;
        Grid: GridProps;
        Icon: IconProps;
        Image: ImageProps;
        Input: InputProps;
        Modal: ModalProps;
        Space: SpaceProps;
        Text: TextProps;
        Toast: ToastProps;
      }> {}
  }
}
