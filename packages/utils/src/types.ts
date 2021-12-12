import React from 'react';

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type RenderProps<T> =
  | string
  | number
  | T
  | React.ReactNode
  | ((props: Partial<T>) => React.ReactNode);
