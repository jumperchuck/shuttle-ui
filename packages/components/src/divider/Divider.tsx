/**
 * Divider
 */
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { ResponsiveValue } from '@shuttle-ui/theme';
import { ColorPropType, SpacingPropType } from '@shuttle-ui/system';

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
    theme,
    colorMode,
    ...rest
  } = useResolutionProps('Divider', props);

  const width = direction?.startsWith('column') ? thickness : undefined;
  const height = direction?.startsWith('row') ? thickness : undefined;

  const boxProps: BoxProps = {
    theme,
    colorMode,
    ...rest,
  };

  if (React.isValidElement(children)) {
    const childProps: DividerProps = {
      flex: 1,
      color,
      direction,
      theme,
      colorMode,
    };
    return (
      <Box flexDirection={direction} center {...boxProps}>
        <Divider {...childProps} mr={10} />
        {React.cloneElement(children, { color })}
        <Divider {...childProps} ml={10} />
      </Box>
    );
  }

  return <Box bgColor={color} width={width} height={height} {...boxProps} />;
};

export default withShuttleUI(Divider);
