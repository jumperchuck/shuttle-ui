import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Text, TextProps } from '../text/Text';

export interface CardTitleProps extends TextProps {}

export const CardTitle = (props: ShuttleUIProps<CardTitleProps>) => {
  return (
    <Text padding="sm" size="lg" style={styles.container} {...props}>
      {props.children}
    </Text>
  );
};

export default withColorMode(withTheme(CardTitle, 'CardTitle'));

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
});
