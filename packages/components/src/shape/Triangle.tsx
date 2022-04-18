import React from 'react';
import {
  ColorPropType,
  ResponsiveValue,
  width as getWidth,
  height as getHeight,
} from '@shuttle-ui/system';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface TriangleProps extends BoxProps {
  direction?: ResponsiveValue<'top' | 'bottom' | 'left' | 'right'>;
  color?: ResponsiveValue<ColorPropType>;
  width?: ResponsiveValue<number>;
  height?: ResponsiveValue<number>;
}

export const Triangle: ShuttleUIComponent<TriangleProps> = (props) => {
  const {
    direction = 'top',
    width: widthProp = 10,
    height: heightProp = 10,
    color,
    ...rest
  } = useResolutionProps('Triangle', props, {
    responsiveProps: ['direction', 'color'],
  });

  const width = getWidth({ width: widthProp, ...rest }) as number;

  const height = getHeight({ height: heightProp, ...rest }) as number;

  const boxProps: BoxProps = {
    width: 0,
    height: 0,
  };

  switch (direction) {
    case 'top':
      boxProps.borderBottomColor = color;
      boxProps.borderBottomWidth = height;
      boxProps.borderLeftWidth = width + 0.5;
      boxProps.borderLeftColor = 'transparent';
      boxProps.borderRightWidth = width + 0.5;
      boxProps.borderRightColor = 'transparent';
      break;
    case 'bottom':
      boxProps.borderColor = 'transparent';
      boxProps.borderTopColor = color;
      boxProps.borderTopWidth = height;
      boxProps.borderLeftWidth = width + 0.5;
      boxProps.borderRightWidth = width + 0.5;
      break;
    case 'left':
      boxProps.borderColor = 'transparent';
      boxProps.borderRightColor = color;
      boxProps.borderRightWidth = width;
      boxProps.borderTopWidth = height + 0.5;
      boxProps.borderBottomWidth = height + 0.5;
      break;
    case 'right':
      boxProps.borderColor = 'transparent';
      boxProps.borderLeftColor = color;
      boxProps.borderLeftWidth = width;
      boxProps.borderTopWidth = height + 0.5;
      boxProps.borderBottomWidth = height + 0.5;
      break;
  }

  return <Box {...boxProps} {...rest} />;
};

export default withShuttleUI(Triangle);
