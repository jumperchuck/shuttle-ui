import { SetStateAction } from 'react';
import {
  EventEmitter,
  getValue,
  isArray,
  isEmpty,
  isEqual,
  isObject,
} from '@shuttle-ui/utils';

import { FieldName, FormControlParams, FormEventType } from './types';
import type FieldControl from './FieldControl';
import NamePath from './NamePath';

export default class FormControl {
  private fields: FieldControl[] = [];

  initialValues: Record<string, any> = {};

  values: Record<string, any> = {};

  eventEmitter = new EventEmitter();

  /**
   * @param options 表单初始化选项
   */
  constructor(options?: FormControlParams) {
    const { initialValues } = options || {};
    if (initialValues) {
      this.initialValues = initialValues;
      this.values = { ...this.initialValues };
    }
  }

  /**
   * 注册字段
   *
   * @param field
   */
  registerField(field: FieldControl) {
    if (this.fields.includes(field)) {
      return;
    }
    this.fields.push(field);
    field.form?.unregisterField(field);
    field.form = this;
  }

  /**
   * 注销字段
   *
   * @param field
   */
  unregisterField(field: FieldControl) {
    const index = this.fields.indexOf(field);
    if (index < 0) {
      return;
    }
    this.fields.splice(index, 1);
    field.form = undefined;
  }

  /**
   * 获取字段
   *
   * @param name
   */
  getField(name: FieldName) {
    const final = (value: FieldName) =>
      isArray(value) && value.length === 1 ? value[0] : name;
    return this.fields.find((field) => isEqual(final(name), final(field.name)));
  }

  /**
   * 获取所有字段
   */
  getFields(name?: FieldName) {
    if (name) {
      const final = (value: FieldName) =>
        isArray(value) && value.length === 1 ? value[0] : name;
      return this.fields.filter((field) => isEqual(final(name), final(field.name)));
    }
    return this.fields;
  }

  /**
   * 获取字段值
   *
   * @param name
   */
  getFieldValue(name: FieldName) {
    return getValue(this.values, name);
  }

  /**
   * 获取所有字段值
   */
  getFieldsValue() {
    return this.values;
  }

  /**
   * 设置字段值
   *
   * @param name
   * @param value
   */
  setFieldValue(name: FieldName, value: SetStateAction<any>) {
    const prevValues = this.values;
    const curValues = (this.values = { ...this.values });
    new NamePath(name, curValues)
      // line feed
      .reduce((parent, item, index, arr) => {
        const { key, next } = item;
        if (index === arr.length - 1) {
          parent[key] = typeof value === 'function' ? value(parent[key]) : value;
        } else if (typeof next?.key === 'number') {
          parent[key] = isArray(parent[key]) ? [...parent[key]] : [];
        } else {
          parent[key] = isObject(parent[key]) ? { ...parent[key] } : {};
        }
        return parent[key];
      }, curValues);
    this.eventEmitter.emit(FormEventType.ON_VALUES_CHANGE, prevValues, curValues);
  }

  /**
   * 批量设置字段值
   *
   * @param values
   */
  setFieldsValue(values: SetStateAction<Record<string, any>>) {
    const prevValues = this.values;
    const curValues = (this.values = {
      ...this.values,
      ...(typeof values === 'function' ? values(prevValues) : values),
    });
    this.eventEmitter.emit(FormEventType.ON_VALUES_CHANGE, prevValues, curValues);
  }

  /**
   * 重置字段值
   *
   * @param name
   */
  resetFieldValue(name: FieldName) {
    this.setFieldValue(name, getValue(this.initialValues, name));
  }

  /**
   * 批量重置字段值
   *
   * @param names - 重置字段名称列表, 不传此参数则重置所有字段
   */
  resetFieldsValue(names?: FieldName[]) {
    if (names) {
      names.forEach((name) => this.resetFieldValue(name));
    } else {
      const prevValues = this.values;
      const curValues = (this.values = { ...this.initialValues });
      this.eventEmitter.emit(FormEventType.ON_VALUES_CHANGE, prevValues, curValues);
    }
  }

  /**
   * 移除字段值
   *
   * @param name
   */
  removeFieldValue(name: FieldName) {
    const prevValues = this.values;
    const curValues = (this.values = { ...this.values });
    new NamePath(name, curValues)
      // line feed
      .reverse()
      .forEach((item, i) => {
        const { key, path, value, parentValue } = item;
        if (i === 0 || (isEmpty(value) && !this.getField(path))) {
          if (isArray(parentValue)) {
            if (typeof key === 'number') {
              parentValue.splice(key, 1);
            }
          } else if (isObject(parentValue)) {
            delete parentValue[key];
          }
        }
      });
    this.eventEmitter.emit(FormEventType.ON_VALUES_CHANGE, prevValues, curValues);
  }

  /**
   * 移除多个字段值
   *
   * @param names 移除字段名称列表, 不传此参数则清空values
   */
  removeFieldsValue(names?: FieldName[]) {
    if (names) {
      names.forEach((name) => this.removeFieldValue(name));
    } else {
      const prevValues = this.values;
      const curValues = (this.values = {});
      this.eventEmitter.emit(FormEventType.ON_VALUES_CHANGE, prevValues, curValues);
    }
  }

  /**
   * 校验字段
   *
   * @param name
   */
  async validateField(name: FieldName) {
    const fields = this.getFields(name);
    const errors = await Promise.all(fields.map((field) => field.validateValue()));
    return {
      name,
      errors: errors.flat(),
    };
  }

  /**
   * 批量校验字段
   *
   * @param names - 校验字段名称列表, 不传此参数则校验所有字段
   */
  async validateFields(names?: FieldName[]) {
    const validators =
      names?.map((name) => this.validateField(name)) ||
      this.fields.map((field) =>
        field.validateValue().then((errors) => ({ name: field.name, errors })),
      );
    const errorFields = await Promise.all(validators).then((result) =>
      result.filter(({ errors }) => errors.length),
    );
    return { values: this.values, errorFields };
  }

  /**
   * 提交表单
   */
  async submit() {
    const result = await this.validateFields();
    const { values, errorFields } = result;
    if (!errorFields.length) {
      this.eventEmitter.emit(FormEventType.ON_SUBMIT, values);
    }
    return result;
  }
}
