import React from 'react';
import { StyleSheet } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Text, TextProps } from '../text/Text';

export interface CardTitleProps extends TextProps {}

export const CardTitle: ShuttleUIComponent<CardTitleProps> = (props) => {
  const { children, ...rest } = useResolutionProps('CardTitle', props);
  return (
    <Text padding="sm" size="lg" style={styles.container} {...rest}>
      {children}
    </Text>
  );
};

export default withShuttleUI(CardTitle);

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
});
