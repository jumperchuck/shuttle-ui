import React, { useEffect, useRef } from 'react';
import { isEqual } from '@shuttle-ui/utils';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useForceUpdate, useResolutionProps } from '../hooks';
import { Box, BoxProps } from '../box/Box';
import { FieldContext, useFormContext } from './context';
import { FieldEventType, FieldName, FieldRule, FormEventType } from './types';
import FieldControl from './FieldControl';
import FormControl from './FormControl';
import useFieldControl from './useFieldControl';

export interface FormItemProps extends BoxProps {
  field?: FieldControl;
  name?: FieldName;
  rules?: FieldRule[];
  dependencies?: FieldName[];
  shouldUpdate?: boolean | ((prevValues: any, curValues: any) => boolean);
  children?:
    | React.ReactNode
    | ((context: { form: FormControl; field: FieldControl }) => React.ReactNode);
}

const getDeps = (props: FormItemProps, form: FormControl) => {
  const names = [];
  if (props.name) names.push(props.name);
  if (props.dependencies) names.push(...props.dependencies);
  return names.map((item) => form.getFieldValue(item));
};

export const FormItem: ShuttleUIComponent<FormItemProps> = (props) => {
  const {
    field: fieldProp,
    name,
    rules,
    children,
    ...rest
  } = useResolutionProps('FormItem', props);

  const { form } = useFormContext();
  const field = useFieldControl(fieldProp);
  form.registerField(field);
  field.name = name || '';
  field.rules = rules || [];

  const forceUpdate = useForceUpdate();
  const propsRef = useRef<FormItemProps>({});
  propsRef.current = props;

  const depsRef = useRef<any[]>([]);
  depsRef.current = getDeps(props, form);

  useEffect(() => {
    const sub = form.eventEmitter.addListener(
      FormEventType.ON_VALUES_CHANGE,
      (prevValues, curValues) => {
        let update = false;
        if (typeof propsRef.current.shouldUpdate === 'function') {
          update = propsRef.current.shouldUpdate(prevValues, curValues);
        } else if (typeof propsRef.current.shouldUpdate === 'boolean') {
          update = propsRef.current.shouldUpdate;
        } else {
          update = !isEqual(depsRef.current, getDeps(propsRef.current, form));
        }
        if (update) {
          field.validateValue();
          forceUpdate();
        }
      },
    );
    return () => {
      form.unregisterField(field);
      sub.remove();
    };
  }, [form, field]);

  useEffect(() => {
    const subs = [
      field.eventEmitter.addListener(FieldEventType.ON_ERRORS_CHANGE, forceUpdate),
      field.eventEmitter.addListener(FieldEventType.ON_VALIDATING_CHANGE, forceUpdate),
    ];
    return () => {
      subs.forEach((sub) => sub.remove());
    };
  }, [field]);

  return (
    <FieldContext.Provider value={{ field }}>
      <Box {...rest}>
        {typeof children === 'function' ? children({ form, field }) : children}
      </Box>
    </FieldContext.Provider>
  );
};

export default withShuttleUI(FormItem);
