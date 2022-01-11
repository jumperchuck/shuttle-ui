import React, { ComponentProps, ComponentType, FC } from 'react';
import { WithColorModeProps } from '@shuttle-ui/color-mode';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { usePlatformProps } from '../hooks';

export type WithShuttleUIComponent<C extends ComponentType, P = ComponentProps<C>> = FC<
  WithColorModeProps<P> & {
    _android?: Partial<P>;
    _ios?: Partial<P>;
    _web?: Partial<P>;
  }
>;

export default function withShuttleUI<C extends ComponentType<any>>(
  Component: C,
): WithShuttleUIComponent<C> & hoistNonReactStatics.NonReactStatics<C> {
  const Wrapper: React.FC<any> = (props) => {
    const platformProps = usePlatformProps(props);
    return <Component {...platformProps} />;
  };
  Wrapper.defaultProps = {
    useDefaultProps: true,
    useConfigProps: true,
  };
  return hoistNonReactStatics(Wrapper, Component);
}
