import { useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

export default function useLayout(initial?: { width?: number; height?: number }) {
  const [width, setWidth] = useState(initial?.width || 0);
  const [height, setHeight] = useState(initial?.height || 0);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
    setHeight(e.nativeEvent.layout.height);
  }, []);

  return { width, height, onLayout };
}
