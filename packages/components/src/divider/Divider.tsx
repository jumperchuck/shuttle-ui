/**
 * Divider
 */
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { ResponsiveValue, useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';
import { ColorPropType, SpacingPropType } from '@shuttle-ui/system';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';

export interface DividerProps extends BoxProps {
  color?: ColorPropType;
  direction?: ViewStyle['flexDirection'];
  thickness?: ResponsiveValue<SpacingPropType>;
}

export const Divider = (props: ShuttleUIProps<DividerProps>) => {
  const {
    color = 'grey.400',
    direction = 'row',
    thickness = StyleSheet.hairlineWidth,
    children,
    theme,
    colorMode,
    ...rest
  } = useThemeConfigProps('Divider', props);

  const width = direction?.startsWith('column') ? thickness : undefined;
  const height = direction?.startsWith('row') ? thickness : undefined;

  const boxProps: ShuttleUIProps<BoxProps> = {
    theme,
    colorMode,
    ...rest,
  };

  if (React.isValidElement(children)) {
    const childProps: ShuttleUIProps<DividerProps> = {
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

export default withColorMode(withTheme(Divider, 'Divider'));
