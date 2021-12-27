/**
 * Badge
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIComponent } from '../types';
import { Text, TextProps } from '../text/Text';

export interface BadgeProps extends TextProps {
  size?: number;
}

export const Badge: ShuttleUIComponent<BadgeProps> = (props) => {
  const {
    size = 25,
    style: styleProp,
    children,
    ...rest
  } = useThemeConfigProps('Badge', props);

  const fontSize = size * 0.5;
  const borderRadius = size / 2;

  return (
    <Text
      numberOfLines={1}
      borderWidth={1}
      bgColor="red.600"
      borderColor="white"
      px={2}
      fontSize={fontSize}
      borderRadius={borderRadius}
      height={size}
      minWidth={size}
      lineHeight={size - 2}
      color="white"
      style={[styles.container, styleProp]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default withColorMode(withTheme(Badge, 'Badge'));

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    overflow: 'hidden',
  },
});
