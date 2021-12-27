import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIComponent } from '../types';
import { Box, BoxProps } from '../box/Box';

export interface InputProps extends BoxProps<TextInputProps> {
  style?: StyleProp<TextStyle>;
}

export const Input: ShuttleUIComponent<InputProps> = (props) => {
  const { style: styleProp, ...rest } = useThemeConfigProps('Input', props);
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

export default withColorMode(withTheme(Input, 'Input'));
