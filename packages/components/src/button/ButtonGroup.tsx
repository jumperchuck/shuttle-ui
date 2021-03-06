import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import { ButtonProps } from './Button';

export interface ButtonGroupProps extends Omit<SpaceProps, keyof TouchableOpacityProps> {
  selectedKeys?: string[];
  selectedProps?: ButtonProps;
  buttonProps?: ButtonProps;
  onChange?: (keys: string[]) => void;
  onPress?: (key: string) => void;
}

export const ButtonGroup: ShuttleUIComponent<ButtonGroupProps> = (props) => {
  const {
    selectedKeys,
    selectedProps,
    buttonProps,
    onChange,
    onPress,
    children,
    ...rest
  } = useResolutionProps('ButtonGroup', props);

  const content = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const key = child.key as string;
    const childProps = {
      ...buttonProps,
      ...(selectedKeys?.includes(key) && selectedProps ? selectedProps : undefined),
      ...child.props,
    };
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

  return (
    <Space direction="row" {...rest}>
      {content}
    </Space>
  );
};

export default withShuttleUI(ButtonGroup);
