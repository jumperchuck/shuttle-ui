import React, { useContext } from 'react';
import { getBreakpointsValue, getValue, mergeProps } from '@shuttle-ui/utils';

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
  resolveProps?: string[],
) => {
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
  return configResults.length
    ? [...configResults, props].reduce((prev, next) => mergeProps(prev, next))
    : props;
};

export const createHooks = <T>(Context: React.Context<ThemeContextType<T>>) => {
  function getThemeConfigProps<P extends {}>(
    props: P,
    component: ReturnType<typeof useThemeComponent>,
    config?: { responsiveProps?: string[] },
  ) {
    const { theme, propConfigs, configPriorities, defaultProps } = component;
    const newProps = config?.responsiveProps
      ? transformResponsiveProps(props, theme, config.responsiveProps)
      : props;

    return transformProps({ ...newProps, theme }, theme, {
      propConfigs,
      configPriorities,
      defaultProps,
    });
  }

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
        ...getValue(context.theme, `components.${componentKey}`),
      };
    }
    return context;
  }

  function useThemeDefaultProps<P extends {}>(
    componentKey?: string,
    props?: P,
  ): { theme: T } & P {
    const { defaultProps, theme } = useThemeComponent<P>(componentKey);
    // @ts-ignore
    return { ...mergeProps(defaultProps, props), theme };
  }

  function useThemeConfigProps<P extends {}>(
    componentKey: string,
    props: P,
    config?: { responsiveProps?: string[] },
  ): { theme: T } & P {
    const component = useThemeComponent(componentKey);

    return getThemeConfigProps(props, component, config);
  }

  function useThemeProps<P extends {}>(
    componentKey: string,
    props: P,
    config?: {
      useDefaultProps?: boolean;
      useConfigProps?: boolean;
      responsiveProps?: string[];
    },
  ): { theme: T } & P {
    const component = useThemeComponent<P>(componentKey);
    const { theme, defaultProps } = component;
    const useDefaultProps =
      (props as any).useDefaultProps ?? config?.useDefaultProps ?? true;
    const useConfigProps =
      (props as any).useConfigProps ?? config?.useConfigProps ?? true;
    const newProps = useDefaultProps
      ? // @ts-ignore
        { ...mergeProps(defaultProps, props), theme }
      : { ...props, theme };
    const finalProps = useConfigProps
      ? getThemeConfigProps(newProps, component, config)
      : newProps;
    // remove useDefaultProps & useConfigProps
    delete (finalProps as any).useDefaultProps;
    delete (finalProps as any).useConfigProps;
    return finalProps;
  }

  return {
    useTheme,
    useThemeComponent,
    useThemeDefaultProps,
    useThemeConfigProps,
    useThemeProps,
  };
};

export default createHooks;
