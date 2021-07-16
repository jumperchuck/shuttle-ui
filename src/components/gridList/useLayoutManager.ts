import { useMemo } from 'react';
import LayoutManager from './LayoutManager';

export default function useLayoutManager() {
  return useMemo(() => {
    return new LayoutManager(1, 1, 0, 0, 0, 0, 0, false);
  }, []);
}
