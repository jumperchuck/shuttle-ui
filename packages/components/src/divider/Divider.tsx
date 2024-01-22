import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { ResponsiveValue } from '@shuttle-ui/theme';
import { margin as getMargin, ColorPropType, SpacingPropType } from '@shuttle-ui/system';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface DividerProps extends BoxProps {
  color?: ColorPropType;
  direction?: ViewStyle['flexDirection'];
  thickness?: ResponsiveValue<SpacingPropType>;
}

export const Divider: ShuttleUIComponent<DividerProps> = (props) => {
  const {
    color = 'grey.400',
    direction = 'row',
    thickness = StyleSheet.hairlineWidth,
    children,
    ...rest
  } = useResolutionProps('Divider', props, {
    responsiveProps: ['thickness'],
  });

  const distance = getMargin({ margin: thickness, ...rest });

  const width = direction?.startsWith('column') ? distance : undefined;
  const height = direction?.startsWith('row') ? distance : undefined;

  if (React.isValidElement(children)) {
    const childProps: DividerProps = {
      flex: 1,
      color,
      direction,
    };
    return (
      <Box flexDirection={direction} center {...rest}>
        <Divider {...childProps} mr={10} />
        {React.cloneElement(children, { color })}
        <Divider {...childProps} ml={10} />
      </Box>
    );
  }

  return <Box bgColor={color} width={width} height={height} {...rest} />;
};

export default withShuttleUI(Divider);
