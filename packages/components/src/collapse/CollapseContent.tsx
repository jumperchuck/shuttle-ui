import React, { useEffect, useState } from 'react';
import { Animated, Easing, ScrollView } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useAnimatedValue, useLayout, useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { useCollapseContext } from './context';

export interface CollapseContentProps extends BoxProps {
  lazy?: boolean;
}

const CollapseContent: ShuttleUIComponent<CollapseContentProps> = (props) => {
  const { lazy, children, ...rest } = useResolutionProps('CollapseContent', props);

  const { active } = useCollapseContext();
  const { height, onLayout } = useLayout(undefined, ['height']);
  const [animating, setAnimating] = useState(false);

  const anim = useAnimatedValue(0);

  useEffect(() => {
    if (active) {
      setAnimating(true);
      Animated.timing(anim, {
        toValue: height,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.in(Easing.linear),
      }).start(({ finished }) => {
        if (finished) setAnimating(false);
      });
    } else {
      setAnimating(true);
      Animated.timing(anim, {
        toValue: 0,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.in(Easing.linear),
      }).start(({ finished }) => {
        if (finished) setAnimating(false);
      });
    }
  }, [active, anim, height]);

  return (
    <Animated.View style={{ height: anim }}>
      <ScrollView scrollEnabled={false}>
        {active || !lazy || animating ? (
          <Box px="md" py="sm" borderTop={0} onLayout={onLayout} {...rest}>
            {children}
          </Box>
        ) : null}
      </ScrollView>
    </Animated.View>
  );
};

export default withShuttleUI(CollapseContent);
