import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { usePrivateState, useResolutionProps } from '../hooks';
import { Checkbox, CheckboxProps } from '../checkbox/Checkbox';
import { Box } from '../box/Box';

export interface RadioProps extends CheckboxProps {}

export const Radio: ShuttleUIComponent<RadioProps> = (props) => {
  const {
    checked: checkedProp,
    defaultChecked,
    onPress: onPressProp,
    children,
    ...rest
  } = useResolutionProps('Checkbox', props);

  const [checked, setChecked] = usePrivateState(!!defaultChecked, checkedProp);

  const onPress = (event: any) => {
    setChecked(true);
    onPressProp?.(event);
  };

  return (
    <Checkbox checked={checked} onPress={onPress} {...rest}>
      {children}
    </Checkbox>
  );
};

Radio.defaultProps = {
  color: 'primary',
  checkedIcon: ({ size, color }) => (
    <Box h={size} w={size} borderWidth={1} borderColor={color} borderRadius={size} p={2}>
      <Box flex={1} bgColor={color} borderRadius={size} />
    </Box>
  ),
  uncheckedIcon: ({ size }) => (
    <Box h={size} w={size} borderWidth={1} borderColor="grey" borderRadius={size} />
  ),
};

export default withShuttleUI(Radio);
