import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';

export interface PopoverArrowProps extends BoxProps {
  height?: number;
  width?: number;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

const getDiagonalLength = (width: number, height: number) => {
  return Math.pow(width * width + height * height, 0.5);
};

const getArrowStyle = (
  width: number,
  height: number,
  placement: PopoverArrowProps['placement'],
): ViewStyle => {
  if (!width || !height) return {};
  // 对角线长度
  const diagonalLength = getDiagonalLength(width, height);
  // 旋转45deg后，高度为对角线长度，计算多出来的长度
  const extraLength = (diagonalLength - height) / 2;
  const style: ViewStyle = { width, height, transform: [] };
  switch (placement) {
    case 'top':
      style.top = 0;
      style.transform?.push({ translateY: -(diagonalLength / 2 - extraLength) });
      style.transform?.push({ rotate: '45deg' });
      break;
    case 'bottom':
      style.bottom = 0;
      style.transform?.push({ translateY: diagonalLength / 2 - extraLength });
      style.transform?.push({ rotate: '45deg' });
      break;
    case 'left':
      style.left = 0;
      style.transform?.push({ translateX: -(diagonalLength / 2 - extraLength) });
      style.transform?.push({ rotate: '45deg' });
      break;
    case 'right':
      style.right = 0;
      style.transform?.push({ translateX: diagonalLength / 2 - extraLength });
      style.transform?.push({ rotate: '45deg' });
      break;
  }
  return style;
};

const getMaskStyle = (
  width: number,
  height: number,
  placement: PopoverArrowProps['placement'],
): ViewStyle => {
  if (!width || !height) return {};
  const diagonalLength = getDiagonalLength(width, height);
  const style: ViewStyle = { [`${placement}`]: 0 };
  switch (placement) {
    case 'top':
    case 'bottom':
      style.width = diagonalLength + 4;
      style.height = diagonalLength / 2 + 2;
      break;
    case 'left':
    case 'right':
      style.height = diagonalLength + 4;
      style.width = diagonalLength / 2 + 2;
      break;
  }
  return style;
};

export const PopoverArrow: ShuttleUIComponent<PopoverArrowProps> = (props) => {
  const {
    width = 8,
    height = 8,
    placement,
    style,
    ...rest
  } = useResolutionProps('PopoverArrow', props);

  const bgColor = rest.bgColor ?? rest.backgroundColor ?? 'background';

  const arrowStyle = useMemo(
    () => [getArrowStyle(width, height, placement), style],
    [width, height, placement, style],
  );

  const maskStyle = useMemo(
    () => [getMaskStyle(width, height, placement)],
    [width, height, placement],
  );

  return (
    <>
      <Box
        position="absolute"
        zIndex={1}
        bgColor={bgColor}
        style={arrowStyle}
        {...rest}
      />
      <Box position="absolute" zIndex={1} bgColor={bgColor} style={maskStyle} />
    </>
  );
};

export default withShuttleUI(PopoverArrow);
