import { useCallback, useRef, useState } from 'react';
import { LayoutRectangle, LayoutChangeEvent } from 'react-native';

export default function useLayout(
  initial?: Partial<LayoutRectangle>,
  deps?: (keyof LayoutRectangle)[],
) {
  const [layout, setLayout] = useState({ width: 0, height: 0, x: 0, y: 0, ...initial });

  const ref = useRef<{ layout: LayoutRectangle; deps: typeof deps }>();
  ref.current = { layout, deps };

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const currentLayout = ref.current?.layout;
    const currentDeps = ref.current?.deps;
    const newLayout = e.nativeEvent.layout;
    if (currentDeps?.length) {
      if (currentDeps.find((item) => currentLayout?.[item] !== newLayout[item])) {
        setLayout({ ...newLayout });
      }
    } else {
      setLayout({ ...newLayout });
    }
  }, []);

  return { ...layout, onLayout };
}
