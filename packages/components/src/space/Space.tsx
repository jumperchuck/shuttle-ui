/**
 * Space
 */
import React from 'react';
import { ViewStyle } from 'react-native';
import { SpacingPropType } from '@shuttle-ui/system';
import { ResponsiveValue, useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';
import { Divider, DividerProps } from '../divider/Divider';

export interface SpaceProps extends BoxProps {
  align?: 'start' | 'end' | 'center';
  direction?: ViewStyle['flexDirection'];
  spacing?: ResponsiveValue<SpacingPropType>;
  dividerProps?: DividerProps;
}

export const Space = (props: ShuttleUIProps<SpaceProps>) => {
  const {
    align,
    direction = 'row',
    spacing = 'md',
    dividerProps,
    children,
    theme,
    colorMode,
    ...rest
  } = useThemeConfigProps('Space', props);

  align;

  const boxProps: ShuttleUIProps<BoxProps> = {
    flexDirection: direction,
    theme,
    colorMode,
    ...rest,
  };

  const childProps: ShuttleUIProps<DividerProps> = {
    theme,
    colorMode,
    color: 'transparent',
    ...{
      ml: direction?.startsWith('row') ? spacing : undefined,
      mt: direction?.startsWith('column') ? spacing : undefined,
    },
    thickness: 0,
    ...dividerProps,
  };

  const content = React.Children.toArray(children)
    .filter((child) => child != null && typeof child !== 'boolean')
    .map((child, index) =>
      index > 0 ? (
        <React.Fragment key={index}>
          <Divider {...childProps} />
          {child}
        </React.Fragment>
      ) : (
        child
      ),
    );

  return <Box {...boxProps}>{content}</Box>;
};

export default withColorMode(withTheme(Space, 'Space'));
