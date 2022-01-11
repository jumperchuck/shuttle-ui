import React from 'react';
import { StyleSheet } from 'react-native';
import { fontSize as getSize } from '@shuttle-ui/system';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Text, TextProps } from '../text/Text';

export interface BadgeProps extends TextProps {}

export const Badge: ShuttleUIComponent<BadgeProps> = (props) => {
  const {
    size: sizeProp,
    style: styleProp,
    children,
    ...rest
  } = useResolutionProps('Badge', props);

  const size = getSize({ size: sizeProp, ...rest }) || 25;

  const fontSize = size / 2;
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

export default withShuttleUI(Badge);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    overflow: 'hidden',
  },
});
