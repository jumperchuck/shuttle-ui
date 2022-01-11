/**
 * Space
 */
import React from 'react';
import { ViewStyle } from 'react-native';
import { SpacingPropType } from '@shuttle-ui/system';
import { ResponsiveValue } from '@shuttle-ui/theme';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { Divider, DividerProps } from '../divider/Divider';

export interface SpaceProps extends BoxProps {
  align?: 'start' | 'end' | 'center';
  direction?: ViewStyle['flexDirection'];
  spacing?: ResponsiveValue<SpacingPropType>;
  dividerProps?: DividerProps;
}

export const Space: ShuttleUIComponent<SpaceProps> = (props) => {
  const {
    align,
    direction = 'row',
    spacing = 'md',
    dividerProps,
    children,
    theme,
    colorMode,
    ...rest
  } = useResolutionProps('Space', props);

  align;

  const boxProps: BoxProps = {
    flexDirection: direction,
    theme,
    colorMode,
    ...rest,
  };

  const childProps: DividerProps = {
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

export default withShuttleUI(Space);
