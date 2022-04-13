import React, { useLayoutEffect, useRef } from 'react';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { FormContext } from './context';
import { FormEventType } from './types';
import FormControl from './FormControl';
import useFormControl from './useFormControl';

export interface FormProps extends BoxProps {
  form?: FormControl;
  initialValues?: any;
  onValuesChange?: (prevValues: any, curValues: any) => void;
  onSubmit?: (values: any) => void;
}

export const Form: ShuttleUIComponent<FormProps> = (props) => {
  const {
    form: formProp,
    initialValues,
    children,
    ...rest
  } = useResolutionProps('Form', props);

  const propsRef = useRef<FormProps>({});
  propsRef.current = rest;

  const form = useFormControl(formProp);
  form.initialValues = initialValues || {};

  useLayoutEffect(() => {
    form.values = { ...form.initialValues };
    const subs = [
      form.eventEmitter.addListener(
        FormEventType.ON_VALUES_CHANGE,
        (prevValues: any, curValues: any) => {
          propsRef.current.onValuesChange?.(prevValues, curValues);
        },
      ),
      form.eventEmitter.addListener(FormEventType.ON_SUBMIT, (values: any) => {
        propsRef.current.onSubmit?.(values);
      }),
    ];
    return () => {
      subs.forEach((sub) => sub.remove());
    };
  }, [form]);

  return (
    <FormContext.Provider value={{ form }}>
      <Box {...rest}>{children}</Box>
    </FormContext.Provider>
  );
};

export default withShuttleUI(Form);
