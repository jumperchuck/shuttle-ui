import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { usePrivateState, useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import Radio, { RadioProps } from './Radio';

export interface RadioGroupProps extends SpaceProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  radioProps?: RadioProps;
  activatedProps?: RadioProps;
}

export const RadioGroup: ShuttleUIComponent<RadioGroupProps> = (props) => {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    radioProps,
    activatedProps,
    children,
    ...rest
  } = useResolutionProps('RadioGroup', props);

  const [value, setValue] = usePrivateState(defaultValue || '', valueProp, onChange);

  const transformChild: SpaceProps['transformChild'] = (child, index) => {
    if (!React.isValidElement(child) || child.type !== Radio) {
      return child;
    }
    const childValue =
      child.props.value ||
      (typeof child.props.children === 'string' ? child.props.children : `${index}`);
    const checked = value === childValue;
    const childProps = {
      ...radioProps,
      ...(checked ? activatedProps : undefined),
      ...child.props,
      checked,
      onChange: (newChecked: boolean) => {
        setValue(childValue);
        child.props.onChange?.(newChecked);
      },
    };
    return React.cloneElement(child, childProps);
  };

  return (
    <Space direction="row" transformChild={transformChild} {...rest}>
      {children}
    </Space>
  );
};

export default withShuttleUI(RadioGroup);
