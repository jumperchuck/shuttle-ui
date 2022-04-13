import Form, { FormProps } from './Form';
import FormItem, { FormItemProps } from './FormItem';
import FormLabel, { FormLabelProps } from './FormLabel';
import FormErrorMessage, { FormErrorMessageProps } from './FormErrorMessage';
import {
  useFormContext,
  useFieldContext,
  FormContextType,
  FieldContextType,
} from './context';
import useFormControl from './useFormControl';
import useFieldControl from './useFieldControl';

export default Object.assign(Form, {
  Item: FormItem,
  Label: FormLabel,
  ErrorMessage: FormErrorMessage,
  useFormContext,
  useFieldContext,
  useForm: useFormControl,
  useField: useFieldControl,
});

export type {
  FormProps,
  FormItemProps,
  FormLabelProps,
  FormErrorMessageProps,
  FormContextType,
  FieldContextType,
};

export * from './types';
