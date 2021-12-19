import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { withTheme } from '@shuttle-ui/theme';

import { Space, SpaceProps } from '../space/Space';
import { ButtonProps } from './Button';
import { ShuttleUIProps } from '../types';
import { mergeProps } from '@shuttle-ui/utils';
import { withColorMode } from '@shuttle-ui/color-mode';

export interface ButtonGroupProps extends Omit<SpaceProps, keyof TouchableOpacityProps> {
  selectedKeys?: string[];
  selectedProps?: ButtonProps;
  buttonProps?: ButtonProps;
  onChange?: (keys: string[]) => void;
  onPress?: (key: string) => void;
}

export const ButtonGroup = (props: ShuttleUIProps<ButtonGroupProps>) => {
  const {
    selectedKeys,
    selectedProps,
    buttonProps,
    onChange,
    onPress,
    children,
    ...rest
  } = props;

  const content = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const key = child.key as string;
    const propsList = [{ ...buttonProps }];
    if (selectedKeys?.includes(key) && selectedProps) {
      propsList.push(selectedProps);
    }
    if (child.props) {
      propsList.push(child.props);
    }
    const childProps = mergeProps.all(propsList);
    if (onPress) {
      childProps.onPress = () => {
        const index = selectedKeys ? selectedKeys.indexOf(key) : -1;
        const newSelectedKeys = selectedKeys ? [...selectedKeys] : [];
        if (index > -1) {
          newSelectedKeys.splice(index, 1);
        } else if (key) {
          newSelectedKeys.push(key);
        }
        onChange?.(newSelectedKeys);
        onPress?.(key);
        child.props.onPress?.();
      };
    }
    return React.cloneElement(child, childProps);
  });

  return <Space {...rest}>{content}</Space>;
};

export default withColorMode(withTheme(ButtonGroup, 'ButtonGroup'));
