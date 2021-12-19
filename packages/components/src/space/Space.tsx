/**
 * Space
 */
import React from 'react';
import { SpacingPropType } from '@shuttle-ui/system';
import { ResponsiveValue, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { Box, BoxProps } from '../box';
import { ShuttleUIProps } from '../types';

export interface SpaceProps extends BoxProps {
  align?: 'start' | 'end' | 'center';
  direction?: 'row' | 'column';
  spacing?: ResponsiveValue<SpacingPropType>;
  divideProps?: BoxProps;
}

export const Space = (props: ShuttleUIProps<SpaceProps>) => {
  const {
    align,
    direction,
    spacing,
    style: styleProp,
    divideProps,
    children,
    theme,
    ...rest
  } = props;

  align;

  const boxProps: ShuttleUIProps<BoxProps> = {
    flexDirection: direction,
    style: styleProp,
    theme,
    ...rest,
  };

  const childProps: ShuttleUIProps<BoxProps> = {
    ...divideProps,
    theme,
  };

  if (direction === 'row') {
    childProps.ml = spacing;
  } else {
    childProps.mt = spacing;
  }

  const content = React.Children.toArray(children)
    .filter((child) => child != null && typeof child !== 'boolean')
    .map((child, index) =>
      index > 0 ? (
        <React.Fragment key={index}>
          <Box {...childProps} />
          {child}
        </React.Fragment>
      ) : (
        child
      ),
    );

  return <Box {...boxProps}>{content}</Box>;
};

export default withColorMode(withTheme(Space, 'Space'));
