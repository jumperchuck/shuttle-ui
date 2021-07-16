import { useMemo } from 'react';
import { DefaultSectionT } from 'react-native';
import LayoutManager from './LayoutManager';

export default function useLayoutManager<T, SectionT = DefaultSectionT>() {
  return useMemo(() => {
    return new LayoutManager<T, SectionT>(
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
  }, []);
}
