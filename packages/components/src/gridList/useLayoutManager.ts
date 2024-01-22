import { useRef } from 'react';

import LayoutManager from './LayoutManager';

export default function useLayoutManager(manager?: LayoutManager) {
  const ref = useRef<LayoutManager>();

  if (manager) {
    ref.current = manager;
  }

  if (!ref.current) {
    ref.current = new LayoutManager(1, 1, 0, 0, 0, 0, 0, false);
  }

  return ref.current!;
}
