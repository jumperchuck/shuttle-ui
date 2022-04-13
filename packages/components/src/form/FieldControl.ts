import { EventEmitter } from '@shuttle-ui/utils';

import { FieldControlParams, FieldEventType, FieldName, FieldRule } from './types';
import type FormControl from './FormControl';
import Validator from './Validator';

export default class FieldControl {
  form?: FormControl;

  name: FieldName;

  rules: FieldRule[] = [];

  validating: boolean = false;

  errors: string[] = [];

  eventEmitter = new EventEmitter();

  /**
   * @param params - 字段初始化参数
   */
  constructor(params?: FieldControlParams) {
    const { name, rules } = params || {};
    this.name = name || '';
    this.rules = rules || [];
  }

  /**
   * 获取表单值
   */
  getValue = () => {
    return this.form?.getFieldValue(this.name);
  };

  /**
   * 修改表单值
   *
   * @param value
   */
  setValue = (value: any) => {
    this.form?.setFieldValue(this.name, value);
  };

  /**
   * 重置初始值
   */
  resetValue = () => {
    this.form?.resetFieldValue(this.name);
  };

  /**
   * 移除表单值
   */
  removeValue = () => {
    this.form?.removeFieldValue(this.name);
  };

  /**
   * 修改校验状态
   *
   * @param validating
   */
  setValidating = (validating: boolean) => {
    if (this.validating === validating) return;
    this.validating = validating;
    this.eventEmitter.emit(FieldEventType.ON_VALIDATING_CHANGE, validating);
  };

  /**
   * 修改错误内容
   *
   * @param errors
   */
  setErrors = (errors: string[]) => {
    if (this.errors === errors) return;
    this.errors = errors;
    this.eventEmitter.emit(FieldEventType.ON_ERRORS_CHANGE, errors);
  };

  /**
   * 校验字段
   */
  validateValue = () => {
    const validator = new Validator(this.rules);
    this.setValidating(true);
    return validator.validate(this.getValue(), (errors) => {
      this.setErrors(errors);
      this.setValidating(true);
    });
    // const errors = await validator.validate(this.getValue());
    // unstable_batchedUpdates(() => {
    //   this.setErrors(errors);
    //   this.setValidating(false);
    // });
    // return errors;
  };
}
