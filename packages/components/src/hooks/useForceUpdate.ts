import { useReducer } from 'react';

export default function useForceUpdate() {
  const [, forceUpdate] = useReducer((state) => state + 1, 0);

  return forceUpdate;
}
