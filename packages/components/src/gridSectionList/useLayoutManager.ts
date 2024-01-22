import { useRef } from 'react';
import { DefaultSectionT } from 'react-native';

import LayoutManager from './LayoutManager';

export default function useLayoutManager<T, SectionT = DefaultSectionT>(
  manager?: LayoutManager<T, SectionT>,
) {
  const ref = useRef<LayoutManager<T, SectionT>>();

  if (manager) {
    ref.current = manager;
  }

  if (!ref.current) {
    ref.current = new LayoutManager(
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      false,
      () => null,
      undefined,
      () => ({ row: 1, col: 1 }),
      undefined,
      undefined,
    );
  }

  return ref.current!;
}
