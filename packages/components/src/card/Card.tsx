/**
 * Card
 */
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface CardProps extends BoxProps {
  wrapperStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const Card: ShuttleUIComponent<CardProps> = (props: CardProps) => {
  const { style, wrapperStyle, children, ...rest } = useResolutionProps('Card', props);

  return (
    <Box style={[styles.container, style]} bgColor="surface" {...rest}>
      <View style={[styles.wrapper, wrapperStyle]}>{children}</View>
    </Box>
  );
};

export default withShuttleUI(Card);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  wrapper: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    elevation: 1,
  },
});
