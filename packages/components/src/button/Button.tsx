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

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Text, TextProps } from '../text/Text';
import { Icon, IconProps } from '../icon/Icon';
import { Space, SpaceProps } from '../space/Space';

export interface ButtonProps extends SpaceProps {
  value?: string;
  type?: ResponsiveValue<'solid' | 'text' | 'outline'>;
  color?: ResponsiveValue<ColorPropType>;
  size?: ResponsiveValue<'xs' | 'sm' | 'md' | 'lg'>;
  text?: string;
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

export const Button: ShuttleUIComponent<ButtonProps> = (props) => {
  const {
    value,
    type,
    color,
    size,
    style: styleProp,
    text,
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
    forwardedRef,
    ...rest
  } = useResolutionProps('Button', props, {
    responsiveProps: ['type', 'color', 'size'],
  });

  value;
  type;
  size;

  const isLoading = loading || leftLoading || rightLoading;

  const spaceProps: SpaceProps = {
    Component: TouchableOpacity,
    activeOpacity: 0.5,
    direction: 'row',
    center: true,
    borderColor: color,
    style: [styleProp, disabled && disabledStyleProp],
    onPress: isLoading ? undefined : onPress,
    disabled,
    forwardedRef,
    ...rest,
  };

  const textStyle = StyleSheet.flatten([
    textStyleProp,
    textPropsProp?.style,
    disabled && disabledTextStyleProp,
  ]);

  const textProps: TextProps = {
    color: 'text',
    ...textPropsProp,
    style: textStyle,
  };

  const fontSize = getFontSize({
    size: textStyle.fontSize ?? textProps.size ?? textProps.fontSize,
    ...rest,
  });

  const textColor = getColor({
    color: textStyle.color ?? textProps.color,
    ...rest,
  });

  const leftLoadingNode = loading || leftLoading;
  const rightLoadingNode = rightLoading;

  const leftIconNode = icon || leftIcon;
  const rightIconNode = rightIcon;

  const itemDefaultProps = {
    color: textColor,
    size: fontSize,
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
      {renderNode(Text, children ?? text, textProps)}
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

Button.defaultProps = {
  type: 'solid',
  color: 'primary',
  size: 'md',
};

export default withShuttleUI(Button);
