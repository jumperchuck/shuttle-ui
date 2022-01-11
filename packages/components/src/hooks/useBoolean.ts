import { useCallback, useState } from 'react';

export default function useBoolean(defaultValue?: boolean) {
  const [state, setState] = useState(!!defaultValue);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, { setTrue, setFalse, setState, toggle }] as const;
}
