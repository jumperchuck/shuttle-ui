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
