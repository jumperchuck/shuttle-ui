import React from 'react';
import { StyleSheet, ImageBackground, ImageBackgroundProps } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface CardCoverProps extends BoxProps<ImageBackgroundProps> {}

export const CardCover: ShuttleUIComponent<CardCoverProps> = (props) => {
  const { style: styleProp, children, ...rest } = useResolutionProps('CardCover', props);
  const style = [styles.container, styleProp];
  return (
    <Box Component={ImageBackground} paddingX="md" paddingY="sm" style={style} {...rest}>
      {children}
    </Box>
  );
};

export default withShuttleUI(CardCover);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
