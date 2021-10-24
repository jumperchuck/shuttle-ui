/**
 * Button
 */
import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Color from 'color';
import { color as getColor, ColorPropType } from '@shuttle-ui/system';
import { mergeProps, renderNode } from '@shuttle-ui/utils';
import { withTheme } from '@shuttle-ui/theme';

import { Box, BoxProps } from '../box';
import { Text, TextProps } from '../text';
import { Icon, IconProps } from '../icon';
import ButtonGroup from './ButtonGroup';

export interface ButtonProps extends BoxProps {
  type?: 'solid' | 'text' | 'outline';
  color?: ColorPropType;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTextStyle?: StyleProp<TextStyle>;
  textProps?: TextProps;
  loading?: boolean | ActivityIndicatorProps;
  icon?: string | IconProps;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps & { theme: ShuttleUI.Theme }) => {
  const {
    type,
    color: colorProp,
    style: styleProp,
    textStyle: textStyleProp,
    disabledStyle: disabledStyleProp,
    disabledTextStyle: disabledTextStyleProp,
    textProps: textPropsProp,
    loading,
    icon,
    disabled,
    onPress,
    text,
    children,
    theme,
    ...rest
  } = props;

  const color = getColor({ color: colorProp, theme });
  const buttonColor = color || theme.colors.primary;
  const textColor = color || 'white';
  const textProps = mergeProps({ ...textPropsProp, theme }, theme.props.Text);

  const viewStyle: ViewStyle = StyleSheet.flatten([
    {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: type === 'solid' ? buttonColor : 'transparent',
      borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
      borderColor: buttonColor,
    },
    styleProp,
    disabled && {
      backgroundColor: type === 'solid' ? theme.colors.disabled : undefined,
      borderColor:
        type === 'outline'
          ? Color(theme.colors.disabled).darken(0.3).string()
          : undefined,
    },
    disabled && disabledStyleProp,
  ]);

  const textStyle: TextStyle = StyleSheet.flatten([
    {
      color: type === 'solid' ? 'white' : textColor,
      textAlign: 'center',
      marginLeft: icon || loading ? 10 : 0,
      ...Text.styleFunction(textProps),
    },
    textStyleProp,
    textProps?.style,
    disabled && {
      color: Color(theme.colors.disabled).darken(0.3).string(),
    },
    disabled && disabledTextStyleProp,
  ]);

  return (
    <Box
      Component={TouchableOpacity}
      activeOpacity={0.5}
      paddingY="sm"
      paddingX="md"
      style={viewStyle}
      onPress={loading ? undefined : onPress}
      disabled={disabled}
      theme={theme}
      {...rest}
    >
      <>
        {loading &&
          renderNode(ActivityIndicator, loading, {
            color: textStyle.color,
            size: textStyle.fontSize ?? 16,
          })}
        {!loading &&
          icon &&
          renderNode(Icon, typeof icon === 'string' ? { name: icon } : icon, {
            color: textStyle.color,
            size: textStyle.fontSize ?? 16,
            theme,
          })}
        <Text {...textProps} style={textStyle}>
          {text || children}
        </Text>
      </>
    </Box>
  );
};

Button.defaultProps = {
  type: 'solid',
};

Button.Group = ButtonGroup;

export default withTheme(Button, 'Button');
