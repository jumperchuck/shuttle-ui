import { StyleSheet } from 'react-native';

import * as colors from './colors';

export default {
  colors: {
    primary: '#423F64',
    secondary: '#2C2A4B',
    accent: '#EE7A64',
    success: '#439946',
    error: '#bf2c24',
    danger: '#c61700',
    warning: '#cfbe27',
    disabled: 'hsl(208, 8%, 90%)',
    background: '#ffffff',
    surface: '#ffffff',
    foreground: '#ffffff',
    text: '#000000',
    ...colors,
  },
  fontFamilies: {},
  fontVariants: {},
  fontSizes: {
    xxl: 24,
    xl: 20,
    lg: 18,
    md: 16,
    sm: 14,
    xs: 12,
    xxs: 8,
  },
  fontWeights: {
    light: 'normal',
    normal: 'normal',
    bold: 'bold',
  },
  spacings: {
    xxl: 40,
    xl: 30,
    lg: 20,
    md: 12,
    sm: 8,
    xs: 4,
    xxs: 2,
  },
  radius: {
    xxl: 40,
    xl: 30,
    lg: 20,
    md: 12,
    sm: 8,
    xs: 4,
    xxs: 2,
  },
  shadows: {
    1: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 0.75,
      shadowOpacity: 0.24,
      elevation: 1,
    },
    2: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 0.5 },
      shadowRadius: 1.5,
      shadowOpacity: 0.3,
      elevation: 2,
    },
    3: {
      shadowColor: colors.black,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.3,
      elevation: 3,
    },
  },
  borders: {
    1: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey['400'],
    },
    2: {
      borderWidth: 1,
      borderColor: colors.grey['400'],
    },
    3: {
      borderWidth: 2,
      borderColor: colors.grey['400'],
    },
  },
  props: {},
} as ShuttleUI.Theme;
