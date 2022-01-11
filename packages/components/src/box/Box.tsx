import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { createBox, BoxProps } from '@shuttle-ui/system';

import { ShuttleUIProps } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';

export type { BoxProps };

const PrivateBox = createBox();

export const Box = <P extends {} = TouchableOpacityProps>(
  props: ShuttleUIProps<BoxProps<P>>,
) => {
  const newProps = useResolutionProps('Box', props);
  return <PrivateBox {...newProps} />;
};

export default withShuttleUI(Box) as typeof Box;
