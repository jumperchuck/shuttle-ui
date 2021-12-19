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
import {
  ColorPropType,
  color as getColor,
  fontSize as getFontSize,
  ResponsiveValue,
} from '@shuttle-ui/system';
import { renderNode, RenderProps } from '@shuttle-ui/utils';
import { withColorMode } from '@shuttle-ui/color-mode';
import { withTheme } from '@shuttle-ui/theme';

import { ShuttleUIProps } from '../types';
import { Text, TextProps } from '../text';
import { Icon, IconProps } from '../icon';
import { Space, SpaceProps } from '../space/Space';

export interface ButtonProps extends SpaceProps {
  type?: 'solid' | 'text' | 'outline';
  color?: ColorPropType;
  size?: ResponsiveValue<'xs' | 'sm' | 'md' | 'lg'>;
  textStyle?: StyleProp<TextStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTextStyle?: StyleProp<TextStyle>;
  textProps?: TextProps;
  loading?: RenderProps<ActivityIndicatorProps>;
  leftLoading?: RenderProps<ActivityIndicatorProps>;
  rightLoading?: RenderProps<ActivityIndicatorProps>;
  icon?: RenderProps<IconProps>;
  leftIcon?: RenderProps<IconProps>;
  rightIcon?: RenderProps<IconProps>;
  children?: React.ReactNode;
}

export const Button = (props: ShuttleUIProps<ButtonProps>) => {
  const {
    type,
    color,
    size,
    style: styleProp,
    textStyle: textStyleProp,
    disabledStyle: disabledStyleProp,
    disabledTextStyle: disabledTextStyleProp,
    textProps: textPropsProp,
    loading,
    leftLoading,
    rightLoading,
    icon,
    leftIcon,
    rightIcon,
    onPress,
    disabled,
    children,
    theme,
    colorMode,
    ...rest
  } = props;

  type;
  size;

  const isLoading = loading || leftLoading || rightLoading;

  const spaceProps: ShuttleUIProps<SpaceProps> = {
    Component: TouchableOpacity,
    activeOpacity: 0.5,
    flexDirection: 'row',
    center: true,
    spacing: 10,
    borderColor: color,
    style: [styleProp, disabled && disabledStyleProp],
    onPress: isLoading ? onPress : undefined,
    disabled,
    theme,
    colorMode,
    ...rest,
  };

  const textStyle = StyleSheet.flatten([
    textStyleProp,
    textPropsProp?.style,
    disabled && disabledTextStyleProp,
  ]);

  const textProps: ShuttleUIProps<TextProps> = {
    color: 'text',
    theme,
    colorMode,
    ...textPropsProp,
    style: textStyle,
  };

  const fontSize = getFontSize({
    size: textStyle.fontSize ?? textProps.size ?? textProps.fontSize,
    theme,
    colorMode,
  });

  const textColor = getColor({
    color: textStyle.color ?? textProps.color,
    theme,
    colorMode,
  });

  const leftLoadingNode = loading || leftLoading;
  const rightLoadingNode = rightLoading;

  const leftIconNode = icon || leftIcon;
  const rightIconNode = rightIcon;

  const itemDefaultProps = {
    color: textColor,
    size: fontSize,
    theme,
    colorMode,
  };

  return (
    <Space {...spaceProps}>
      {leftLoadingNode &&
        renderNode(ActivityIndicator, leftLoadingNode, itemDefaultProps)}
      {!leftLoadingNode &&
        leftIconNode &&
        renderNode(
          Icon,
          typeof leftIconNode === 'string' ? { name: leftIconNode } : leftIconNode,
          itemDefaultProps,
        )}
      {renderNode(Text, children, textProps)}
      {!rightLoadingNode &&
        rightIconNode &&
        renderNode(
          Icon,
          typeof rightIconNode === 'string' ? { name: rightIconNode } : rightIconNode,
          itemDefaultProps,
        )}
      {rightLoadingNode &&
        renderNode(ActivityIndicator, rightLoadingNode, itemDefaultProps)}
    </Space>
  );
};

export default withColorMode(withTheme(Button, 'Button'));
