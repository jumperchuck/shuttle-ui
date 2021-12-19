import React, { ComponentType, useContext } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getPath, isClassComponent, isRefComponent, mergeProps } from '@shuttle-ui/utils';

import { ThemeContextType, WithThemeComponent } from './types';

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

const transformProps = (props: any, configs: any, priorities?: string[]) => {
  if (!props) {
    return {};
  }
  if (!configs) {
    return props;
  }
  const configKeys = orderKeys(Object.keys(configs), priorities);
  const configProps = configKeys.map((key) => {
    if (
      !props.hasOwnProperty(key) ||
      props[key] === undefined ||
      props[key] === null ||
      props[key] === false
    ) {
      return null;
    }
    const propValue = props[key];
    const configValue = configs[key];
    const handle =
      typeof configValue === 'function'
        ? configValue
        : configValue?.[propValue] || configValue;
    if (typeof handle === 'function') {
      return handle(props);
    } else {
      return handle;
    }
  });
  return mergeProps.all([...configProps, props]);
};

export const createThemeWrapper = <T,>(Context: React.Context<ThemeContextType<T>>) => {
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

  function useThemeProps<P extends {}>(
    componentKey?: string,
    props?: P,
  ): ThemeContextType<T> & P {
    const { defaultProps, propConfigs, configPriorities, theme } =
      useThemeComponent<P>(componentKey);
    const newProps = mergeProps<{}, P>(defaultProps, props);
    return transformProps({ ...newProps, theme }, propConfigs, configPriorities);
  }

  function withTheme<C extends ComponentType<any>>(
    WrappedComponent: C,
    propKey?: string,
  ): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
    const needForwardRef =
      isClassComponent(WrappedComponent) || isRefComponent(WrappedComponent);

    const Component = (props: any, ref: any) => {
      const { children, ...rest } = props;
      const newProps = useThemeProps(propKey, rest);
      if (needForwardRef) {
        return <WrappedComponent ref={ref} {...newProps} children={children} />;
      }
      return <WrappedComponent {...newProps} children={children} />;
    };

    if (needForwardRef) {
      return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent) as any;
    }

    return hoistNonReactStatics(Component, WrappedComponent);
  }

  return { useTheme, useThemeComponent, useThemeProps, withTheme };
};

export default createThemeWrapper;
