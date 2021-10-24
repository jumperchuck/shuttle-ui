import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { withTheme } from '@shuttle-ui/theme';

import { Box, BoxProps } from '../box';

export interface InputProps extends BoxProps<TextInputProps> {
  style?: StyleProp<TextStyle>;
}

export const Input = (props: InputProps & { theme: ShuttleUI.Theme }) => {
  const { style: styleProp, ...rest } = props;
  return <Box Component={TextInput} style={[styles.container, styleProp]} {...rest} />;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
});

export default withTheme(Input, 'Input');