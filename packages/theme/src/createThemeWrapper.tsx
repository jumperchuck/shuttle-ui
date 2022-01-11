import React, { ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { isClassComponent, isRefComponent } from '@shuttle-ui/utils';

import { ThemeContextType, WithThemeComponent } from './types';
import createHooks from './createHooks';

export const wrapper = <C extends ComponentType<any>>(
  TargetComponent: C,
  transformProps?: (props: any) => any,
): any => {
  const needForwardRef =
    isClassComponent(TargetComponent) || isRefComponent(TargetComponent);

  const Component = (props: any, ref: any) => {
    const newProps = transformProps ? transformProps(props) : props;
    if (needForwardRef) {
      return <TargetComponent ref={ref} {...newProps} />;
    }
    return <TargetComponent {...newProps} />;
  };

  if (needForwardRef) {
    return hoistNonReactStatics(React.forwardRef(Component), TargetComponent);
  }

  return hoistNonReactStatics(Component, TargetComponent);
};

export const createThemeWrapper = <T,>(Context: React.Context<ThemeContextType<T>>) => {
  const hooks = createHooks(Context);
  const { useTheme, useThemeDefaultProps, useThemeConfigProps, useThemeProps } = hooks;

  function withTheme<C extends ComponentType<any>>(
    TargetComponent: C,
  ): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
    return wrapper(TargetComponent, (props) => ({
      ...useTheme(),
      ...props,
    }));
  }

  function withThemeDefaultProps<C extends ComponentType<any>>(
    TargetComponent: C,
    componentKey?: string,
  ): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
    return wrapper(TargetComponent, (props) =>
      useThemeDefaultProps(
        componentKey || TargetComponent.displayName || TargetComponent.name,
        props,
      ),
    );
  }

  function withThemeConfigProps<C extends ComponentType<any>>(
    TargetComponent: C,
    componentKey?: string,
    config?: { responsiveProps?: string[] },
  ): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
    return wrapper(TargetComponent, (props) =>
      useThemeConfigProps(
        componentKey || TargetComponent.displayName || TargetComponent.name,
        props,
        config,
      ),
    );
  }

  function withThemeProps<C extends ComponentType<any>>(
    TargetComponent: C,
    componentKey?: string,
    config?: {
      useDefaultProps?: boolean;
      useConfigProps?: boolean;
      responsiveProps?: string[];
    },
  ): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
    return wrapper(TargetComponent, (props) =>
      useThemeProps(
        componentKey || TargetComponent.displayName || TargetComponent.name,
        props,
        config,
      ),
    );
  }

  return {
    ...hooks,
    withTheme,
    withThemeDefaultProps,
    withThemeConfigProps,
    withThemeProps,
  };
};

export default createThemeWrapper;
