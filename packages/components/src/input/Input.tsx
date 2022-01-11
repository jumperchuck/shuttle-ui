import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface InputProps extends BoxProps<TextInputProps> {
  style?: StyleProp<TextStyle>;
}

export const Input: ShuttleUIComponent<InputProps> = (props) => {
  const { style: styleProp, ...rest } = useResolutionProps('Input', props);
  return (
    <Box<TextInputProps>
      Component={TextInput}
      style={[styles.container, styleProp]}
      {...(rest as any)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
});

export default withShuttleUI(Input);
