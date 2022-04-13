import { useEffect, useRef } from 'react';

import FieldControl from './FieldControl';

export default function useFieldControl(field?: FieldControl) {
  const ref = useRef<FieldControl>();
  if (!ref.current) {
    ref.current = field || new FieldControl();
  }

  useEffect(() => {
    return () => {
      ref.current!.eventEmitter.removeAllListeners();
    };
  }, []);

  return ref.current!;
}
