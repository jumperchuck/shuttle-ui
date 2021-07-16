import { colors } from '../styles';

import { createTheme } from './createTheme';

export default createTheme({
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
});
