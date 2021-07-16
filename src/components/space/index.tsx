/**
 * Space
 */
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { getValue } from '../../utils';
import { SpacingPropType } from '../../system';
import { Theme, withTheme } from '../../themes';
import { Box, BoxProps } from '../box';

export interface SpaceProps extends BoxProps {
  align?: 'start' | 'end' | 'center' | null;
  direction?: 'row' | 'column';
  spacing?: SpacingPropType;
  divideStyle?: StyleProp<ViewStyle>;
}

export const Space: React.FC<SpaceProps & { theme: Theme }> = (props) => {
  const {
    align = 'center',
    direction = 'row',
    spacing = 'md',
    style: styleProp,
    divideStyle,
    children,
    theme,
    ...rest
  } = props;
  const { spacings } = theme;

  const style = [
    align ? (direction === 'row' ? rowStyles[align] : colStyles[align]) : null,
    {
      flexDirection: direction,
    },
    styleProp,
  ];

  const childSize = getValue(spacings, spacing);

  const childStyle = [
    direction === 'row'
      ? {
          marginLeft: childSize,
        }
      : {
          marginTop: childSize,
        },
    divideStyle,
  ];

  const content = React.Children.toArray(children)
    .filter((child) => child != null && typeof child !== 'boolean')
    .map((child, index) =>
      index > 0 ? (
        <React.Fragment key={index}>
          <View style={childStyle} />
          {child}
        </React.Fragment>
      ) : (
        child
      ),
    );

  return (
    <Box style={style} theme={theme} {...rest}>
      {content}
    </Box>
  );
};

export default withTheme(Space, 'Space');

const rowStyles = StyleSheet.create({
  start: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  end: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

const colStyles = StyleSheet.create({
  start: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  end: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
  },
});
