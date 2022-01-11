import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface ModalContainerProps extends BoxProps {}

export const ModalContainer: ShuttleUIComponent<ModalContainerProps> = (props) => {
  const { children, ...rest } = useResolutionProps('ModalContainer', props);
  return (
    <Box width={Dimensions.get('window').width * 0.8} bgColor="white" {...rest}>
      <SafeAreaView>{children}</SafeAreaView>
    </Box>
  );
};

export default withShuttleUI(ModalContainer);
