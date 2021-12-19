import { StyleSheet } from 'react-native';
import { getColorModeValue } from '@shuttle-ui/system';

import { ButtonProps } from '../button';

export type ButtonTheme = ShuttleUI.ThemeComponent<ButtonProps>;

const button: ButtonTheme = {
  defaultProps: {
    type: 'solid',
    color: 'primary',
    size: 'md',
  },
  propConfigs: {
    type: {
      solid: (props) => {
        const { color } = props;
        return {
          bgColor: color,
          textProps: {
            color: 'white',
          },
        };
      },
      text: (props) => {
        const { color } = props;
        return {
          textProps: {
            color,
          },
        };
      },
      outline: (props) => {
        const { color } = props;
        return {
          borderWidth: StyleSheet.hairlineWidth,
          textProps: {
            color,
          },
        };
      },
    },
    size: {
      xs: {
        px: 'xs',
        py: 'xs',
        textProps: {
          size: 'xs',
        },
      },
      sm: {
        px: 'sm',
        py: 'xs',
        textProps: {
          size: 'sm',
        },
      },
      md: {
        px: 'md',
        py: 'sm',
        textProps: {
          size: 'md',
        },
      },
      lg: {
        px: 'lg',
        py: 'lg',
        textProps: {
          size: 'lg',
        },
      },
    },
    disabled: (props) => {
      const { type, theme, colorMode, disabled } = props;
      if (!disabled) {
        return {};
      }
      const disabledColor = getColorModeValue(theme?.colors.disabled, colorMode);
      return {
        disabledStyle: {
          backgroundColor: type === 'solid' ? disabledColor : undefined,
          borderColor: type === 'outline' ? disabledColor : undefined,
        },
        disabledTextStyle: {
          color: type === 'solid' ? 'white' : disabledColor,
        },
      };
    },
  },
  configPriorities: [],
};

export default button;
