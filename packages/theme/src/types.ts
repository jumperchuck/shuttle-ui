import { ComponentProps, ComponentType, FC } from 'react';
import { ShadowStyleIOS, TextStyle } from 'react-native';

import { RecursivePartial } from '@shuttle-ui/utils';

export type ResponsiveValue<T> = T | { [key in keyof ShuttleUI.ThemeBreakpoints]?: T };

export type WithThemeComponent<C extends ComponentType> = FC<
  WithThemeProps<ComponentProps<C>>
>;

export type WithThemeProps<P> = Omit<P, keyof ThemeContextType<any>>;

export type ThemeContextType<T = ShuttleUI.Theme> = {
  theme: T;
  updateTheme: (updates: RecursivePartial<T>) => void;
  replaceTheme: (updates: RecursivePartial<T>) => void;
};

export interface ThemeProviderProps<T> {
  theme: T;
}

export type GetPropValue<P extends {}, K extends keyof P> = P[K] extends ResponsiveValue<
  infer T
>
  ? T
  : P[K];

export type ComponentConfigValue<P extends {}> = Partial<P> | ((props: P) => P);

export type ComponentConfigs<P extends {}, Props extends Required<P> = Required<P>> = {
  [Key in keyof Props]?: GetPropValue<Props, Key> extends string | number
    ?
        | {
            [K in GetPropValue<Props, Key>]?: ComponentConfigValue<P>;
          }
        | ComponentConfigValue<P>
    : ComponentConfigValue<P>;
};

declare global {
  namespace ShuttleUI {
    interface ThemeBreakpoints {
      xl: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
    }

    interface ThemeSizes {
      xxl: number;
      xl: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
      xxs: number;
    }

    interface ThemeColor {
      main: string;
      light?: string;
      dark?: string;
    }

    interface ThemeColors {
      primary: ThemeColor;
      secondary: ThemeColor;
      danger: ThemeColor;
      accent: ThemeColor;
      success: ThemeColor;
      error: ThemeColor;
      warning: ThemeColor;
      disabled: ThemeColor;
      background: ThemeColor;
      surface: ThemeColor;
      text: ThemeColor;
    }

    interface ThemeFontFamilies {
      [key: string]: string;
    }

    interface ThemeFontVariants {
      [key: string]: TextStyle;
    }

    interface ThemeFontSizes extends ThemeSizes {}

    interface ThemeFontWeights {
      light: TextStyle['fontWeight'];
      normal: TextStyle['fontWeight'];
      bold: TextStyle['fontWeight'];
    }

    interface ThemeSpacings extends ThemeSizes {}

    interface ThemeRadius extends ThemeSizes {}

    interface ThemeShadow extends ShadowStyleIOS {
      elevation?: number;
    }

    interface ThemeShadows {
      [key: string]: ThemeShadow;
    }

    interface ThemeBorder {
      borderWidth?: number;
      borderColor?: string;
    }

    interface ThemeBorders {
      [key: string]: ThemeBorder;
    }

    interface ThemeComponent<P extends {} = Record<string, any>> {
      defaultProps: RecursivePartial<P>;
      propConfigs: ComponentConfigs<P>;
      configPriorities: string[];
    }

    interface ThemeComponents {
      [key: string]: ThemeComponent;
    }

    interface Theme {
      breakpoints: ThemeBreakpoints;
      colors: ThemeColors;
      spacings: ThemeSpacings;
      radius: ThemeRadius;
      shadows: ThemeShadows;
      borders: ThemeBorders;
      fontFamilies: ThemeFontFamilies;
      fontVariants: ThemeFontVariants;
      fontSizes: ThemeFontSizes;
      fontWeights: ThemeFontWeights;
      components: ThemeComponents;
    }
  }
}
