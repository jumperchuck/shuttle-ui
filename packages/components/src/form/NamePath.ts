import { isArray } from '@shuttle-ui/utils';

import { FieldName } from './types';

export type PathItem = {
  key: string | number;
  path: (string | number)[];
  value: any;
  parentValue: any;
  prev?: PathItem;
  next?: PathItem;
};

export default class NamePath extends Array<PathItem> {
  constructor(name: FieldName, values: Record<string, any>) {
    super();
    this.add(name, values);
  }

  private add(name: FieldName, values: Record<string, any>) {
    if (isArray(name)) {
      name.forEach((item) => this.add(item, values));
      return;
    }
    const key = name;
    const prev = this[this.length - 1];
    const path = prev ? [...prev.path, key] : [key];
    const parentValue = prev ? prev.value : values;
    const value = parentValue?.[key];
    const item: PathItem = {
      key,
      path,
      value,
      parentValue,
      prev,
    };
    if (prev) prev.next = item;
    this.push(item);
  }
}
