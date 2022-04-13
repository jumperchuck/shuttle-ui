import { useEffect, useRef } from 'react';

import FormControl from './FormControl';

export default function useFormControl(form?: FormControl) {
  const ref = useRef<FormControl>();
  if (!ref.current) {
    ref.current = form || new FormControl();
  }

  useEffect(() => {
    return () => {
      ref.current!.eventEmitter.removeAllListeners();
    };
  }, []);

  return ref.current!;
}
