import React from 'react';
import { Dimensions } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useLayout, useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { PopoverContextType, usePopoverContext } from './context';
import PopoverArrow, { PopoverArrowProps } from './PopoverArrow';

export interface PopoverContainerProps extends BoxProps {}

const getContainerProps = (
  width: number,
  height: number,
  placement: PopoverContextType['placement'],
  layout: Required<PopoverContextType>['layout'],
) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const props: BoxProps = {
    opacity: !width || !height ? 0 : 1,
    position: 'absolute',
    center: true,
  };
  const distance = 10;
  switch (placement) {
    case 'top':
      props.bottom = windowHeight - layout.pageY + distance;
      props.left = layout.pageX + (layout.width - width) / 2;
      break;
    case 'top-left':
      props.bottom = windowHeight - layout.pageY + distance;
      props.left = layout.pageX;
      break;
    case 'top-right':
      props.bottom = windowHeight - layout.pageY + distance;
      props.right = windowWidth - (layout.pageX + layout.width);
      break;
    case 'bottom':
      props.top = layout.pageY + layout.height + distance;
      props.left = layout.pageX + (layout.width - width) / 2;
      break;
    case 'bottom-left':
      props.top = layout.pageY + layout.height + distance;
      props.left = layout.pageX;
      break;
    case 'bottom-right':
      props.top = layout.pageY + layout.height + distance;
      props.right = windowWidth - (layout.pageX + layout.width);
      break;
    case 'left':
      props.top = layout.pageY + (layout.height - height) / 2;
      props.right = windowWidth - layout.pageX + distance;
      break;
    case 'left-top':
      props.top = layout.pageY;
      props.right = windowWidth - layout.pageX + distance;
      break;
    case 'left-bottom':
      props.bottom = windowHeight - (layout.pageY + layout.height);
      props.right = windowWidth - layout.pageX + distance;
      break;
    case 'right':
      props.top = layout.pageY + (layout.height - height) / 2;
      props.left = layout.pageX + layout.width + distance;
      break;
    case 'right-top':
      props.top = layout.pageY;
      props.left = layout.pageX + layout.width + distance;
      break;
    case 'right-bottom':
      props.bottom = windowHeight - (layout.pageY + layout.height);
      props.left = layout.pageX + layout.width + distance;
      break;
  }
  return props;
};

const getArrowProps = (
  width: number,
  height: number,
  placement: PopoverContextType['placement'],
) => {
  const props: PopoverArrowProps = {};
  switch (placement) {
    case 'top':
    case 'top-left':
    case 'top-right':
      props.placement = 'bottom';
      break;
    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
      props.placement = 'top';
      break;
    case 'left':
    case 'left-top':
    case 'left-bottom':
      props.placement = 'right';
      break;
    case 'right':
    case 'right-top':
    case 'right-bottom':
      props.placement = 'left';
      break;
  }
  return props;
};

export const PopoverContainer: ShuttleUIComponent<PopoverContainerProps> = (props) => {
  const {
    children,
    elevation = 3,
    boxShadow,
    ...rest
  } = useResolutionProps('PopoverContainer', props);
  const { placement, layout } = usePopoverContext();
  const { width, height, onLayout } = useLayout();

  if (!layout) return null;

  const contentProps: BoxProps = {
    bgColor: 'background',
    padding: 'sm',
    borderRadius: 'xs',
    elevation,
    boxShadow,
    ...rest,
  };

  const containerProps = getContainerProps(width, height, placement, layout);

  const arrowProps = {
    bgColor: contentProps.bgColor ?? contentProps.backgroundColor,
    elevation: elevation > 2.2 ? 2.2 : elevation,
    ...getArrowProps(width, height, placement),
  };

  let arrowElement: React.ReactNode = null;
  let otherChildren: React.ReactNode[] = [];

  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === PopoverArrow) {
        arrowElement = React.cloneElement(child, arrowProps);
      } else {
        otherChildren.push(child);
      }
    }
  });

  return (
    <Box {...containerProps} onLayout={onLayout}>
      {arrowElement}
      <Box {...contentProps}>{otherChildren}</Box>
    </Box>
  );
};

export default withShuttleUI(PopoverContainer);
