import React from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { usePrivateState, useResolutionProps } from '../hooks';
import { Space, SpaceProps } from '../space/Space';
import Checkbox, { CheckboxProps } from './Checkbox';

export interface CheckboxGroupProps extends SpaceProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  checkboxProps?: CheckboxProps;
  activatedProps?: CheckboxProps;
}

export const CheckboxGroup: ShuttleUIComponent<CheckboxGroupProps> = (props) => {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    checkboxProps,
    activatedProps,
    children,
    ...rest
  } = useResolutionProps('CheckboxGroup', props);

  const [value, setValue] = usePrivateState(defaultValue || [], valueProp, onChange);

  const transformChild: SpaceProps['transformChild'] = (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    if (child.type !== Checkbox) {
      return child;
    }
    const childValue =
      child.props.value ||
      (typeof child.props.children === 'string' ? child.props.children : `${index}`);
    const included = value.includes(childValue);
    const childProps = {
      ...checkboxProps,
      ...(included ? activatedProps : undefined),
      checked: included,
      ...child.props,
    };
    childProps.onChange = (checked: boolean) => {
      const valueIndex = value.indexOf(childValue);
      const newValue = [...value];
      if (valueIndex > -1) {
        newValue.splice(valueIndex, 1);
      } else if (childValue) {
        newValue.push(childValue);
      }
      setValue(newValue);
      child.props.onChange?.(checked);
    };
    return React.cloneElement(child, childProps);
  };

  return (
    <Space direction="row" transformChild={transformChild} {...rest}>
      {children}
    </Space>
  );
};

export default withShuttleUI(CheckboxGroup);
