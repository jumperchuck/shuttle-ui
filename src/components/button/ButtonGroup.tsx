import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Theme, withTheme } from '../../themes';
import { Space, SpaceProps } from '../space';
import { ButtonProps } from './index';

export interface ButtonGroupProps extends Omit<SpaceProps, keyof TouchableOpacityProps> {
  selectedKeys?: string[];
  selectedProps?: ButtonProps;
  buttonProps?: ButtonProps;
  onChange?: (keys: string[]) => void;
  onPress?: (key: string) => void;
}

export const ButtonGroup = (props: ButtonGroupProps & { theme: Theme }) => {
  const {
    selectedKeys,
    selectedProps,
    buttonProps,
    onChange,
    onPress,
    children,
    ...rest
  } = props;

  const content = React.Children.map(children, (item) => {
    if (React.isValidElement(item)) {
      const style = [buttonProps?.style, item.props.style];
      const childProps = {
        ...buttonProps,
        onPress: () => {
          const key = item.key as string;
          if (onChange) {
            const index = selectedKeys ? selectedKeys.indexOf(key) : -1;
            const newSelectedKeys = selectedKeys ? [...selectedKeys] : [];
            if (index > -1) {
              newSelectedKeys.splice(index, 1);
            } else if (key) {
              newSelectedKeys.push(key);
            }
            onChange(newSelectedKeys);
          }
          onPress?.(key);
          item.props.onPress?.();
        },
        style,
      };
      if (selectedKeys && selectedKeys.includes(item.key as string)) {
        style.push(selectedProps?.style);
        Object.assign(childProps, {
          color: 'accent',
          ...selectedProps,
          style,
        });
      }
      return React.cloneElement(item, childProps);
    }
    return item;
  });

  return <Space {...rest}>{content}</Space>;
};

export default withTheme(ButtonGroup, 'ButtonGroup');
