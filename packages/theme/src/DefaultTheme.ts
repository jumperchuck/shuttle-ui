import { StyleSheet } from 'react-native';

import * as colors from './colors';
import createColors from './createColors';

export default {
  breakpoints: {
    xl: 1280,
    lg: 992,
    md: 768,
    sm: 480,
    xs: 0,
  },
  colors: createColors({
    primary: colors.blue,
    secondary: colors.purple,
    danger: colors.orange,
    accent: colors.amber,
    success: colors.green,
    error: colors.red,
    warning: colors.orange,
    disabled: 'hsl(208, 8%, 90%)',
    background: colors.white,
    surface: colors.white,
    text: colors.black,
    ...colors,
  }),
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
    none: {
      shadowColor: 'transparent',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    0: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    1: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    2: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    3: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    4: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    5: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    6: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    7: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    8: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
    9: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
  },
  borders: {
    none: {
      borderWidth: 0,
      borderColor: undefined,
    },
    0: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey['400'],
    },
    1: {
      borderWidth: 1,
      borderColor: colors.grey['400'],
    },
    2: {
      borderWidth: 2,
      borderColor: colors.grey['400'],
    },
    3: {
      borderWidth: 3,
      borderColor: colors.grey['400'],
    },
    4: {
      borderWidth: 4,
      borderColor: colors.grey['400'],
    },
    5: {
      borderWidth: 5,
      borderColor: colors.grey['400'],
    },
    6: {
      borderWidth: 6,
      borderColor: colors.grey['400'],
    },
    7: {
      borderWidth: 7,
      borderColor: colors.grey['400'],
    },
    8: {
      borderWidth: 8,
      borderColor: colors.grey['400'],
    },
    9: {
      borderWidth: 9,
      borderColor: colors.grey['400'],
    },
  },
  components: {},
} as ShuttleUI.Theme;
