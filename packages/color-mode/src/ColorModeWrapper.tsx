import React, { ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { isClassComponent, isRefComponent } from '@shuttle-ui/utils';

import { useColorModeProps } from './colorModeHooks';
import { WithColorModeComponent } from './types';

export const withColorMode = <C extends ComponentType<any>>(
  WrappedComponent: C,
): WithColorModeComponent<C> & hoistNonReactStatics.NonReactStatics<C> => {
  const needForwardRef =
    isClassComponent(WrappedComponent) || isRefComponent(WrappedComponent);

  const Component = (props: any, ref: any) => {
    const newProps = useColorModeProps(props);
    if (needForwardRef) {
      return <WrappedComponent ref={ref} {...newProps} />;
    }
    return <WrappedComponent {...newProps} />;
  };

  if (needForwardRef) {
    return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent) as any;
  }

  return hoistNonReactStatics(Component, WrappedComponent);
};
