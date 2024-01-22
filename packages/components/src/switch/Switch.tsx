import React from 'react';
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native';
import { createBox } from '@shuttle-ui/system';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { BoxProps } from '../box/Box';

export interface SwitchProps extends BoxProps, Omit<RNSwitchProps, 'disabled'> {}

const PrivateSwitch = createBox();

PrivateSwitch.defaultProps = {
  Component: RNSwitch,
};

export const Switch: ShuttleUIComponent<SwitchProps> = (props) => {
  const { ...rest } = useResolutionProps('Switch', props);

  return <PrivateSwitch {...rest} />;
};

export default withShuttleUI(Switch);
