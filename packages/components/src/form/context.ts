import { createContext, useContext } from 'react';

import FormControl from './FormControl';
import FieldControl from './FieldControl';

export type FormContextType = {
  form: FormControl;
};

export type FieldContextType = {
  field?: FieldControl;
};

export const FormContext = createContext<FormContextType>({
  form: new FormControl(),
});

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FieldContext = createContext<FieldContextType>({
  field: undefined,
});

export const useFieldContext = () => {
  return useContext(FieldContext);
};
