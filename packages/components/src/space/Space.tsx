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
  transformChild?: (
    child: React.ReactChild | React.ReactFragment | React.ReactPortal,
    index: number,
  ) => React.ReactNode;
}

export const Space: ShuttleUIComponent<SpaceProps> = (props) => {
  const {
    align,
    direction,
    spacing,
    dividerProps: dividerPropsProp,
    transformChild,
    children,
    ...rest
  } = useResolutionProps('Space', props);

  align;

  const boxProps: BoxProps = {
    flexDirection: direction,
    ...rest,
  };

  const dividerProps: DividerProps = {
    color: 'transparent',
    direction: direction?.startsWith('row') ? 'column' : 'row',
    thickness: spacing,
    ...dividerPropsProp,
  };

  const content = React.Children.toArray(children).map((child, index) => {
    const item = transformChild ? transformChild(child, index) : child;
    if (item !== undefined && item != null && typeof item !== 'boolean') {
      if (index > 0) {
        return (
          <React.Fragment key={index}>
            <Divider {...dividerProps} />
            {item}
          </React.Fragment>
        );
      }
    }
    return item;
  });

  return <Box {...boxProps}>{content}</Box>;
};

Space.defaultProps = {
  direction: 'row',
  spacing: 'md',
};

export default withShuttleUI(Space);
