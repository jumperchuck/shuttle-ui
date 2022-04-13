export type FieldRule = {
  required: boolean;
  message?: string;
  max?: number;
  min?: number;
  pattern?: RegExp;
  transform?: (value: any) => any;
  validator?: (value: any, rule: FieldRule) => undefined | string | Error | Promise<any>;
};

export type FieldName = string | number | (string | number)[];

export type FieldControlParams = {
  name?: FieldName;
  rules?: FieldRule[];
};

export enum FieldEventType {
  ON_VALIDATING_CHANGE = 'onValidatingChange',
  ON_ERRORS_CHANGE = 'onErrorsChange',
}

export type FormControlParams = {
  name?: string;
  initialValues?: Record<string, any>;
};

export enum FormEventType {
  ON_VALUES_CHANGE = 'onValuesChange',
  ON_SUBMIT = 'onSubmit',
}
