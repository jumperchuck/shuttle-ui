import { useContext } from 'react';
import { mergeProps } from '@shuttle-ui/utils';

import { ColorMode } from './types';
import { ColorModeContext } from './colorModeContext';

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

export const useColorModeValue = <T1, T2>(light: T1, dark: T2): T1 | T2 => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
};

export const useColorModeProps = <P extends {}>(
  userProps: P,
): { colorMode: ColorMode } & P => {
  const { colorMode } = useColorMode();
  const { _light, _dark, ...props } = userProps as any;
  if (_light && colorMode === 'light') {
    return { ...mergeProps<P, P>(props, _light), colorMode };
  } else if (_dark && colorMode === 'dark') {
    return { ...mergeProps<P, P>(props, _dark), colorMode };
  }
  return { ...props, colorMode };
};
