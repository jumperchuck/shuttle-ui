/**
 * Card
 */
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { withTheme } from '@shuttle-ui/theme';

import { Box, BoxProps } from '../box';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import CardCover from './CardCover';

export interface CardProps extends BoxProps {
  wrapperStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const Card = (props: CardProps & { theme: ShuttleUI.Theme }) => {
  const { style, wrapperStyle, children, ...rest } = props;

  return (
    <Box style={[styles.container, style]} backgroundColor="surface" {...rest}>
      <View style={[styles.wrapper, wrapperStyle]}>{children}</View>
    </Box>
  );
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Cover = CardCover;

export default withTheme(Card, 'Card');

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
