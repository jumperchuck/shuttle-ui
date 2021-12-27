import React, { useContext } from 'react';
import { getBreakpointsValue, getPath, mergeProps } from '@shuttle-ui/utils';

import { ThemeContextType } from './types';

const orderKeys = (keys: string[], priorities?: string[]) => {
  if (!priorities || !priorities.length) {
    return keys;
  }
  return keys.sort((a, b) => {
    const aIndex = priorities.indexOf(a);
    if (aIndex < 0) return -1;
    const bIndex = priorities.indexOf(b);
    if (bIndex < 0) return 0;
    if (aIndex < bIndex) return 1;
    if (aIndex > bIndex) return -1;
    return 0;
  });
};

const getConfigProps = (props: any, configs: any, configKey: string) => {
  if (
    !props.hasOwnProperty(configKey) ||
    props[configKey] === undefined ||
    props[configKey] === null ||
    props[configKey] === false
  ) {
    return null;
  }
  const propValue = props[configKey];
  const configValue = configs[configKey];
  const handle =
    typeof configValue === 'function'
      ? configValue
      : configValue?.[propValue] || configValue;
  if (typeof handle === 'function') {
    return handle(props);
  } else {
    return handle;
  }
};

const transformResponsiveProps = <T extends {}>(
  props: T,
  theme: any,
  config: { resolveProps?: string[] },
) => {
  const { resolveProps } = config;
  if (!resolveProps?.length) {
    return props;
  }
  const newProps: T = { ...props };
  resolveProps.forEach((key) => {
    if (newProps.hasOwnProperty(key)) {
      // @ts-ignore
      newProps[key] = getBreakpointsValue(newProps[key], theme.breakpoints);
    }
  });
  return newProps;
};

const transformProps = (
  props: any,
  theme: any,
  component: Partial<ShuttleUI.ThemeComponent>,
) => {
  const { propConfigs, configPriorities } = component;
  if (!propConfigs) {
    return props;
  }
  const configResults: any[] = [];
  orderKeys(Object.keys(propConfigs), configPriorities).forEach((key) => {
    const configProps = getConfigProps(props, propConfigs, key);
    if (configProps) {
      configResults.push(configProps);
    }
  });
  return configResults.length ? mergeProps.all([...configResults, props]) : props;
};

export const createHooks = <T>(Context: React.Context<ThemeContextType<T>>) => {
  function useTheme() {
    return useContext(Context);
  }

  function useThemeComponent<P extends {}>(
    componentKey?: string,
  ): ThemeContextType<T> & Partial<ShuttleUI.ThemeComponent<P>> {
    const context = useTheme();
    if (componentKey) {
      return {
        ...context,
        ...getPath(context.theme, `components.${componentKey}`),
      };
    }
    return context;
  }

  function useThemeDefaultProps<P extends {}>(
    componentKey?: string,
    props?: P,
  ): ThemeContextType<T> & P {
    const { defaultProps, ...context } = useThemeComponent<P>(componentKey);
    // @ts-ignore
    return { ...mergeProps(defaultProps, props), ...context };
  }

  function useThemeConfigProps<P extends {}>(
    componentKey: string,
    props: P,
    responsiveConfig?: { resolveProps?: string[] },
  ): ThemeContextType<T> & P {
    const { theme, propConfigs, configPriorities, defaultProps } =
      useThemeComponent(componentKey);

    const newProps = responsiveConfig
      ? transformResponsiveProps(props, theme, responsiveConfig)
      : props;

    return transformProps(newProps, theme, {
      propConfigs,
      configPriorities,
      defaultProps,
    });
  }

  return { useTheme, useThemeComponent, useThemeDefaultProps, useThemeConfigProps };
};

export default createHooks;
