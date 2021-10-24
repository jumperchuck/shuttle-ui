import React from 'react';
import { StyleSheet, ImageBackground, ImageBackgroundProps } from 'react-native';
import { withTheme } from '@shuttle-ui/theme';

import { Box, BoxProps } from '../box';

export interface CardCoverProps extends BoxProps<ImageBackgroundProps> {}

export const CardCover = (props: CardCoverProps & { theme: ShuttleUI.Theme }) => {
  const { style: styleProp, children, ...rest } = props;
  const style = [styles.container, styleProp];
  return (
    <Box Component={ImageBackground} paddingX="md" paddingY="sm" style={style} {...rest}>
      {children}
    </Box>
  );
};

export default withTheme(CardCover, 'CardCover');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
