import React from 'react';
import { createText, TextProps } from '@shuttle-ui/system';
import { ShuttleUIComponent } from '../types';
import { useResolutionProps } from '../hooks';
import { withShuttleUI } from '../helper';

export type { TextProps };

const PrivateText = createText();

export const Text: ShuttleUIComponent<TextProps> = (props) => {
  const { color = 'text', ...rest } = useResolutionProps('Text', props);
  return <PrivateText color={color} {...rest} />;
};

export default withShuttleUI(Text);
