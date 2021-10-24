import { ComponentProps, ComponentType, FC } from 'react';
import { ShadowStyleIOS, TextStyle } from 'react-native';

import { RecursivePartial } from '@shuttle-ui/utils';

export type WithThemeComponent<C extends ComponentType> = FC<
  WithThemeProps<ComponentProps<C>>
>;

export type WithThemeProps<P> = Omit<P, keyof ThemeContextType<any>>;

export type ThemeContextType<T> = {
  theme: T;
  updateTheme: (updates: RecursivePartial<T>) => void;
  replaceTheme: (updates: RecursivePartial<T>) => void;
};

export interface ThemeProviderProps<T> {
  theme: T;
}

declare global {
  namespace ShuttleUI {
    interface ThemeSizes {
      xxl: number;
      xl: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
      xxs: number;
    }

    interface ThemeColors {
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

    interface ThemeProps {
      [key: string]: Record<string, any>;
    }

    interface Theme {
      colors: ThemeColors;
      spacings: ThemeSpacings;
      radius: ThemeRadius;
      shadows: ThemeShadows;
      borders: ThemeBorders;
      props: ThemeProps;
      fontFamilies: ThemeFontFamilies;
      fontVariants: ThemeFontVariants;
      fontSizes: ThemeFontSizes;
      fontWeights: ThemeFontWeights;
    }
  }
}
