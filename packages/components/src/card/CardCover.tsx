import React from 'react';
import { StyleSheet, ImageBackground, ImageBackgroundProps } from 'react-native';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';

export interface CardCoverProps extends BoxProps<ImageBackgroundProps> {}

export const CardCover = (props: ShuttleUIProps<CardCoverProps>) => {
  const { style: styleProp, children, ...rest } = useThemeConfigProps('CardCover', props);
  const style = [styles.container, styleProp];
  return (
    <Box Component={ImageBackground} paddingX="md" paddingY="sm" style={style} {...rest}>
      {children}
    </Box>
  );
};

export default withColorMode(withTheme(CardCover, 'CardCover'));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
