import { ShadowStyleIOS, TextStyle } from 'react-native';

import {
  AvatarProps,
  BadgeProps,
  ButtonProps,
  ButtonGroupProps,
  CardProps,
  CardTitleProps,
  CardContentProps,
  CardCoverProps,
  ContainerProps,
  DialogProps,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
  DividerProps,
  GridProps,
  GridListProps,
  IconProps,
  ImageProps,
  InputProps,
  TextProps,
  ModalProps,
  SpaceProps,
  StepperProps,
} from '../components';

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type ComponentTheme<P> = RecursivePartial<P> | undefined;

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  error: string;
  danger: string;
  warning: string;
  disabled: string;
  background: string;
  surface: string;
  foreground: string;
  text: string;
}

export interface ThemeText {
  fonts: {
    [key in string]: TextStyle;
  };
  sizes: {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
  weights: {
    light: TextStyle['fontWeight'];
    normal: TextStyle['fontWeight'];
    bold: TextStyle['fontWeight'];
  };
  h1?: TextStyle;
  h2?: TextStyle;
  h3?: TextStyle;
  h4?: TextStyle;
  h5?: TextStyle;
}

export interface ThemeSpacings {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export interface ThemeRadius {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export interface ThemeShadow extends ShadowStyleIOS {
  elevation?: number;
}

export interface ThemeBorder {
  borderWidth?: number;
  borderColor?: string;
}

export interface ThemeProps {
  Avatar?: ComponentTheme<AvatarProps>;
  Badge?: ComponentTheme<BadgeProps>;
  Button?: ComponentTheme<ButtonProps>;
  ButtonGroup?: ComponentTheme<ButtonGroupProps>;
  Card?: ComponentTheme<CardProps>;
  CardTitle?: ComponentTheme<CardTitleProps>;
  CardContent?: ComponentTheme<CardContentProps>;
  CardCover?: ComponentTheme<CardCoverProps>;
  Container?: ComponentTheme<ContainerProps>;
  Dialog?: ComponentTheme<DialogProps>;
  DialogTitle?: ComponentTheme<DialogTitleProps>;
  DialogContent?: ComponentTheme<DialogContentProps>;
  DialogActions?: ComponentTheme<DialogActionsProps>;
  Divider?: ComponentTheme<DividerProps>;
  Grid?: ComponentTheme<GridProps>;
  GridList?: ComponentTheme<GridListProps<any>>;
  Icon?: ComponentTheme<IconProps>;
  Image?: ComponentTheme<ImageProps>;
  Input?: ComponentTheme<InputProps>;
  Text?: ComponentTheme<TextProps>;
  Modal?: ComponentTheme<ModalProps>;
  Space?: ComponentTheme<SpaceProps>;
  Stepper?: ComponentTheme<StepperProps>;
}

export interface Theme {
  colors: ThemeColors;
  text: ThemeText;
  spacings: ThemeSpacings;
  radius: ThemeRadius;
  shadows: ThemeShadow[];
  borders: ThemeBorder[];
  props: ThemeProps;
}
