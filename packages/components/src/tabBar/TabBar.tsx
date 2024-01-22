import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle, ScrollView } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useLayout, usePrivateState, useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';

import TabBarItem, { TabBarItemProps } from './TabBarItem';

export interface TabBarProps extends SpaceProps {
  tabIndex?: number;
  defaultTabIndex?: number;
  onChange?: (index: number) => void;
  itemProps?: TabBarItemProps;
  activeProps?: TabBarItemProps;
}

export const TabBar: ShuttleUIComponent<TabBarProps> = (props) => {
  const {
    tabIndex = 0,
    defaultTabIndex = 0,
    onChange,
    itemProps,
    activeProps,
    children,
    ...rest
  } = useResolutionProps('TabBar', props);

  const scrollViewRef = useRef<ScrollView>(null);
  const contentOffsetRef = useRef({ x: 0, y: 0 });
  const contentSizeRef = useRef({ width: 0, height: 0 });

  const { width: scrollViewWidth, onLayout: onScrollViewLayout } = useLayout();
  const [itemLayouts, setItemLayouts] = useState<LayoutRectangle[]>([]);
  const onItemLayout = useCallback((layout: LayoutRectangle, i: number) => {
    itemLayouts[i] = layout;
    setItemLayouts([...itemLayouts]);
  }, []);

  const [index, setIndex] = usePrivateState(defaultTabIndex, tabIndex, onChange);

  const jumpToIndex = useCallback(
    (newIndex: number) => {
      const { x: scrollX } = contentOffsetRef.current;
      const { x, width } = itemLayouts[newIndex] || { x: 0, width: 0 };
      const target = Math.max(x - scrollViewWidth / 2 + width / 2, 0);
      if (scrollX !== target) {
        scrollViewRef.current?.scrollTo({ x: target });
      }
      setIndex(newIndex);
    },
    [itemLayouts],
  );

  useEffect(() => {
    if (scrollViewWidth > 0) {
      // jumpToIndex(index);
    }
  }, [index, scrollViewWidth]);

  const transformChild: SpaceProps['transformChild'] = (child, i) => {
    if (!React.isValidElement(child) || child.type !== TabBarItem) {
      return child;
    }
    const childProps = {
      ...itemProps,
      ...(tabIndex === i ? activeProps : undefined),
      onLayout: (e: LayoutChangeEvent) => onItemLayout(e.nativeEvent.layout, i),
      ...child.props,
    };
    if (onChange) {
      childProps.onPress = () => {
        jumpToIndex(i);
        child.props.onPress?.();
      };
    }
    return React.cloneElement(child, childProps);
  };

  console.log(itemLayouts);

  return (
    <Space
      Component={
        <ScrollView
          ref={scrollViewRef}
          onLayout={onScrollViewLayout}
          onScroll={(e) => {
            contentOffsetRef.current = e.nativeEvent.contentOffset;
            contentSizeRef.current = e.nativeEvent.contentSize;
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          horizontal
        />
      }
      forwardedRef={scrollViewRef}
      transformChild={transformChild}
      spacing={0}
      {...rest}
    >
      {children}
    </Space>
  );
};

TabBar.defaultProps = {
  itemProps: {
    type: 'text',
    color: 'text',
  },
  activeProps: {
    type: 'solid',
  },
};

export default withShuttleUI(TabBar);
