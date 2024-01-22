import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import Button, { ButtonProps } from './Button';

export interface ButtonGroupProps extends Omit<SpaceProps, keyof TouchableOpacityProps> {
  value?: string[];
  buttonProps?: ButtonProps;
  activeProps?: ButtonProps;
  onChange?: (value: string[]) => void;
  onPress?: (value: string) => void;
}

export const ButtonGroup: ShuttleUIComponent<ButtonGroupProps> = (props) => {
  const { value, buttonProps, activeProps, onChange, onPress, children, ...rest } =
    useResolutionProps('ButtonGroup', props);

  const transformChild: SpaceProps['transformChild'] = (child, index) => {
    if (!React.isValidElement(child) || child.type !== Button) {
      return child;
    }
    const childValue =
      child.props.value ||
      (typeof child.props.children === 'string' ? child.props.children : `${index}`);
    const included = value?.includes(childValue);
    const childProps = {
      ...buttonProps,
      ...(included ? activeProps : undefined),
      ...child.props,
    };
    if (onPress || onChange) {
      childProps.onPress = () => {
        const valueIndex = value ? value.indexOf(childValue) : -1;
        const newValue = value ? [...value] : [];
        if (valueIndex > -1) {
          newValue.splice(valueIndex, 1);
        } else if (childValue) {
          newValue.push(childValue);
        }
        onChange?.(newValue);
        onPress?.(childValue);
        child.props.onPress?.();
      };
    }
    return React.cloneElement(child, childProps);
  };

  return (
    <Space direction="row" transformChild={transformChild} {...rest}>
      {children}
    </Space>
  );
};

export default withShuttleUI(ButtonGroup);
