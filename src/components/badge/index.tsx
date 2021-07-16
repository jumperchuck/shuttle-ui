/**
 * Badge
 */
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../styles';
import { Theme, withTheme } from '../../themes';
import { Text, TextProps } from '../text';

export interface BadgeProps extends TextProps {
  size?: number;
}

export const Badge = (props: BadgeProps & { theme: Theme }) => {
  const { size = 25, style: styleProp, children, ...rest } = props;
  const fontSize = size * 0.5;
  const borderRadius = size / 2;
  const style = [
    styles.container,
    {
      fontSize,
      height: size,
      minWidth: size,
      lineHeight: size - 2,
      borderRadius,
    },
    styleProp,
  ];
  return (
    <Text
      numberOfLines={1}
      bgColor={colors.red600}
      color={colors.white}
      style={style}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default withTheme(Badge, 'Badge');

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 2,
    overflow: 'hidden',
  },
});
