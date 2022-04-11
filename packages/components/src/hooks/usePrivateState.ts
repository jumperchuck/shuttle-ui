import { SetStateAction, useCallback, useRef, useState } from 'react';

export default function usePrivateState<S>(
  initialState: S,
  propState?: S,
  onChange?: (newState: S) => void,
) {
  const [state, setState] = useState(initialState);
  const finalState = propState !== undefined ? propState : state;
  const ref = useRef({ finalState, propState, onChange });
  ref.current.finalState = finalState;
  ref.current.propState = propState;
  ref.current.onChange = onChange;

  const setFinalState = useCallback((action: SetStateAction<S>) => {
    const newState =
      // @ts-ignore
      typeof action === 'function' ? action(ref.current.finalState) : action;
    if (ref.current.propState === undefined) {
      setState(newState);
    }
    if (ref.current.onChange !== undefined) {
      ref.current.onChange(newState);
    }
  }, []);

  return [finalState, setFinalState] as const;
}
