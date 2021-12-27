import { getColorModeValue } from '@shuttle-ui/utils';

import { ButtonProps } from '../button';

export type ButtonTheme = ShuttleUI.ThemeComponent<ButtonProps>;

const button: ButtonTheme = {
  defaultProps: {},
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
          borderWidth: 1,
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
        spacing: 'xs',
        textProps: {
          size: 'xs',
        },
      },
      sm: {
        px: 'sm',
        py: 'xs',
        spacing: 'sm',
        textProps: {
          size: 'sm',
        },
      },
      md: {
        px: 'md',
        py: 'sm',
        spacing: 'sm',
        textProps: {
          size: 'md',
        },
      },
      lg: {
        px: 'lg',
        py: 'lg',
        spacing: 'md',
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
