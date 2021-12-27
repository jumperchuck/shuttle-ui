import React, { ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { isClassComponent, isRefComponent } from '@shuttle-ui/utils';
import createHooks from './createHooks';

import { ThemeContextType, WithThemeComponent } from './types';

export const createThemeWrapper = <T,>(Context: React.Context<ThemeContextType<T>>) => {
  const { useThemeDefaultProps, ...hooks } = createHooks(Context);

  function withTheme<C extends ComponentType<any>>(
    WrappedComponent: C,
    componentKey?: string,
  ): WithThemeComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
    const needForwardRef =
      isClassComponent(WrappedComponent) || isRefComponent(WrappedComponent);

    const Component = (props: any, ref: any) => {
      const { children, ...rest } = props;
      const newProps = useThemeDefaultProps(
        componentKey || WrappedComponent.displayName,
        rest,
      );
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

  return { ...hooks, useThemeDefaultProps, withTheme };
};

export default createThemeWrapper;
