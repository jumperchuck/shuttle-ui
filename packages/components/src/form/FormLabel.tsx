import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Text, TextProps } from '../text/Text';

export interface FormLabelProps extends TextProps {}

export const FormLabel: ShuttleUIComponent<FormLabelProps> = (props) => {
  const rest = useResolutionProps('FormLabel', props);

  return <Text {...rest} />;
};

export default withShuttleUI(FormLabel);
