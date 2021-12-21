import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';

export interface InputProps extends BoxProps<TextInputProps> {
  style?: StyleProp<TextStyle>;
}

export const Input = (props: ShuttleUIProps<InputProps>) => {
  const { style: styleProp, ...rest } = props;
  return <Box Component={TextInput} style={[styles.container, styleProp]} {...rest} />;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
});

export default withColorMode(withTheme(Input, 'Input'));
