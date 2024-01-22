import React, { useCallback, useEffect, useRef } from 'react';
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import {
  useAnimatedValue,
  useLayout,
  usePrivateState,
  useResolutionProps,
} from '../hooks';
import { Box, BoxProps } from '../box/Box';

import TabViewItem from './TabViewItem';

export interface TabViewProps extends BoxProps {
  tabIndex?: number;
  defaultTabIndex?: number;
  initialWidth?: number;
  initialHeight?: number;
  onChange?: (index: number) => void;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
  swipeEnabled?: boolean;
}

export const TabView: ShuttleUIComponent<TabViewProps> = (props) => {
  const {
    tabIndex = 0,
    defaultTabIndex = 0,
    initialWidth = 0,
    initialHeight = 0,
    onChange,
    onSwipeStart,
    onSwipeEnd,
    swipeEnabled,
    children,
    ...rest
  } = useResolutionProps('TabView', props);

  const { width, height, onLayout } = useLayout({
    width: initialWidth,
    height: initialHeight,
  });
  const [index, setIndex] = usePrivateState(defaultTabIndex, tabIndex, onChange);
  const panX = useAnimatedValue(0);
  const currentIndexRef = useRef(index);
  const pendingIndexRef = useRef<number>();
  currentIndexRef.current = index;

  const swipeVelocityThreshold = 0.15;
  const swipeDistanceThreshold = width / 1.75;

  const content = React.Children.toArray(children)
    .filter((child) => child != null && typeof child !== 'boolean')
    .map((child) => {
      if (React.isValidElement(child) && child.type !== TabViewItem) {
        return <TabViewItem>{child}</TabViewItem>;
      }
      return child;
    });

  const jumpToIndex = useCallback(
    (newIndex: number) => {
      const offset = -newIndex * width;
      Animated.spring(panX, {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        toValue: offset,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished) {
          pendingIndexRef.current = undefined;
        }
      });
      if (currentIndexRef.current !== newIndex) {
        currentIndexRef.current = newIndex;
        setIndex(newIndex);
      }
      pendingIndexRef.current = newIndex;
    },
    [width],
  );

  useEffect(() => {
    jumpToIndex(index);
  }, [index, width]);

  const canMoveScreen = (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    if (swipeEnabled === false) {
      return false;
    }
    const { dx, dy, vx, vy } = gestureState;
    const isHorizontal =
      Math.abs(dx) > Math.abs(dy * 2) && Math.abs(vx) > Math.abs(vy * 2);
    return (
      isHorizontal &&
      ((currentIndexRef.current > 0 && dx >= 12) ||
        (currentIndexRef.current < content.length - 1 && dx <= -12))
    );
  };

  const startGesture = () => {
    onSwipeStart?.();
    panX.stopAnimation();
    // @ts-expect-error
    panX.setOffset(panX._value);
  };

  const moveGesture = (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    const { dx } = gestureState;
    if (
      (dx > 0 && currentIndexRef.current <= 0) ||
      (dx < 0 && currentIndexRef.current >= content.length - 1)
    ) {
      return;
    }
    panX.setValue(dx);
  };

  const finishGesture = (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    panX.flattenOffset();
    onSwipeEnd?.();

    const { dx, dy, vx, vy } = gestureState;

    const currentIndex =
      typeof pendingIndexRef.current === 'number'
        ? pendingIndexRef.current
        : currentIndexRef.current;

    let nextIndex = currentIndex;

    if (
      Math.abs(dx) > Math.abs(dy) &&
      Math.abs(vx) > Math.abs(vy) &&
      (Math.abs(dx) > swipeDistanceThreshold || Math.abs(vx) > swipeVelocityThreshold)
    ) {
      if (dx < 0) {
        nextIndex = Math.min(currentIndex + 1, content.length - 1);
      } else {
        nextIndex = Math.max(currentIndex - 1, 0);
      }
    }

    jumpToIndex(nextIndex);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: canMoveScreen,
    onMoveShouldSetPanResponderCapture: canMoveScreen,
    onPanResponderGrant: startGesture,
    onPanResponderMove: moveGesture,
    onPanResponderRelease: finishGesture,
    onPanResponderTerminate: finishGesture,
    onPanResponderTerminationRequest: () => true,
  });

  const maxTranslate = width * (content.length - 1);
  const translateX = panX.interpolate({
    inputRange: [-maxTranslate, 0],
    outputRange: [-maxTranslate, 0],
    extrapolate: 'clamp',
  });

  return (
    <Box
      onLayout={onLayout}
      w="100%"
      h="100%"
      overflow="hidden"
      {...panResponder.panHandlers}
      {...rest}
    >
      <Animated.View
        style={{
          flex: 1,
          flexDirection: 'row',
          transform: [{ translateX }],
        }}
      >
        {width && height ? content : null}
      </Animated.View>
    </Box>
  );
};

export default withShuttleUI(TabView);
