import React from 'react';
import { StyleSheet } from 'react-native';

import { Theme, withTheme } from '../../themes';
import Text, { TextProps } from '../text';

export interface CardTitleProps extends TextProps {}

export const CardTitle = (props: CardTitleProps & { theme: Theme }) => {
  return (
    <Text padding="sm" size="lg" style={styles.container} {...props}>
      {props.children}
    </Text>
  );
};

export default withTheme(CardTitle, 'CardTitle');

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
});
