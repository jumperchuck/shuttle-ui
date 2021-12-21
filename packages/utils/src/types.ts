import React from 'react';

export type Dict = { [P in string]: any };

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type RenderProps<T> =
  | string
  | number
  | boolean
  | T
  | React.ReactNode
  | ((props: Partial<T>) => React.ReactNode);

export const isClassComponent = (Component: any): Component is React.Component<Dict> =>
  Component && Component.prototype && Component.prototype.isReactComponent;

export const isRefComponent = (
  Component: any,
): Component is React.ForwardRefExoticComponent<Dict> =>
  Component && Component.$$typeof === Symbol.for('react.forward_ref');

export const isObject = (value: any): value is Object =>
  Object.prototype.toString.call(value) === '[object Object]';

export const isArray = (value: any): value is Array<any> =>
  Object.prototype.toString.call(value) === '[object Array]';
