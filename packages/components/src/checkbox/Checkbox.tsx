import React from 'react';
import { renderNode, RenderProps } from '@shuttle-ui/utils';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { usePrivateState, useResolutionProps } from '../hooks';
import { Box } from '../box/Box';
import { Button, ButtonProps } from '../button/Button';
import { Icon, IconProps } from '../icon/Icon';

export interface CheckboxProps extends ButtonProps {
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  checkedIcon?: RenderProps<IconProps>;
  uncheckedIcon?: RenderProps<IconProps>;
  indeterminateIcon?: RenderProps<IconProps>;
  iconPlacement?: 'left' | 'right';
  onChange?: (checked: boolean) => void;
}

export const Checkbox: ShuttleUIComponent<CheckboxProps> = (props) => {
  const {
    color,
    checked: checkedProp,
    defaultChecked,
    indeterminate,
    checkedIcon,
    uncheckedIcon,
    indeterminateIcon,
    iconPlacement,
    onChange,
    onPress: onPressProp,
    children,
    ...rest
  } = useResolutionProps('Checkbox', props);

  const [checked, setChecked] = usePrivateState(!!defaultChecked, checkedProp, onChange);

  const icon = checked ? checkedIcon : indeterminate ? indeterminateIcon : uncheckedIcon;

  const onPress = (event: any) => {
    setChecked(!checked);
    onPressProp?.(event);
  };

  const buttonProps: ButtonProps = {
    type: 'text',
    color: 'text',
    onPress,
    ...rest,
  };

  if (iconPlacement === 'left') {
    buttonProps.leftIcon = (iconProps) =>
      renderNode(Icon, icon, {
        ...iconProps,
        color,
      });
  } else {
    buttonProps.rightIcon = (iconProps) =>
      renderNode(Icon, icon, {
        ...iconProps,
        color,
      });
  }

  return <Button {...buttonProps}>{children}</Button>;
};

Checkbox.defaultProps = {
  color: 'primary',
  checkedIcon: ({ size, color }) => (
    <Box h={size} w={size} bgColor={color} center>
      <Icon type="ant-design" name="check" size={size} color="background" />
    </Box>
  ),
  uncheckedIcon: ({ size }) => (
    <Box h={size} w={size} borderWidth={1} borderColor="grey" />
  ),
  indeterminateIcon: ({ size, color }) => (
    <Box h={size} w={size} borderWidth={1} borderColor={color} p={2}>
      <Box flex={1} bgColor={color} />
    </Box>
  ),
};

export default withShuttleUI(Checkbox);
