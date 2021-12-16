import { useContext } from 'react';
import { mergeProps } from '@shuttle-ui/utils';

import { ColorModeContext } from './colorModeContext';

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

export const useColorModeValue = (light: any, dark: any) => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
};

export const useColorModeProps = <P extends {}>(userProps: P) => {
  const context = useColorMode();
  const { _light, _dark, ...props } = userProps as any;
  if (_light && context.colorMode === 'light') {
    return mergeProps(_light, props);
  } else if (_dark && context.colorMode === 'dark') {
    return mergeProps(_dark, props);
  }
  return props;
};
