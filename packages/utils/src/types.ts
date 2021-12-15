import React from 'react';

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type RenderProps<T> =
  | string
  | number
  | T
  | React.ReactNode
  | ((props: Partial<T>) => React.ReactNode);

export const isClassComponent = (Component: any) =>
  Component.prototype && Component.prototype.isReactComponent;

export const isRefComponent = (Component: any) =>
  Component.$$typeof === Symbol.for('react.forward_ref');

export const isObject = (value: any) =>
  Object.prototype.toString.call(value) === '[object Object]';

export const isArray = (value: any) =>
  Object.prototype.toString.call(value) === '[object Array]';
