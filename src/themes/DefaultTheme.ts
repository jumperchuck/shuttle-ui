import { colors } from '../styles';

import { Theme } from './theme';
import { StyleSheet } from 'react-native';

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
    background: colors.white,
    surface: colors.white,
    foreground: colors.white,
    text: colors.black,
  },
  text: {
    fonts: {},
    sizes: {
      xl: 20,
      lg: 18,
      md: 16,
      sm: 14,
      xs: 12,
    },
    weights: {
      light: 'normal',
      normal: 'normal',
      bold: 'bold',
    },
  },
  spacings: {
    xl: 30,
    lg: 20,
    md: 12,
    sm: 8,
    xs: 4,
  },
  radius: {
    xl: 30,
    lg: 20,
    md: 12,
    sm: 8,
    xs: 4,
  },
  shadows: [
    {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 0.75,
      shadowOpacity: 0.24,
      elevation: 1,
    },
    {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 0.5 },
      shadowRadius: 1.5,
      shadowOpacity: 0.3,
      elevation: 2,
    },
    {
      shadowColor: colors.black,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.3,
      elevation: 3,
    },
  ],
  borders: [
    {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey400,
    },
    {
      borderWidth: 1,
      borderColor: colors.grey400,
    },
    {
      borderWidth: 2,
      borderColor: colors.grey400,
    },
  ],
  props: {},
} as Theme;
