import { useRef } from 'react';
import { Animated } from 'react-native';

export default function useAnimatedValue(value: number) {
  const ref = useRef<Animated.Value>();

  if (!ref.current) {
    ref.current = new Animated.Value(value);
  }

  return ref.current as Animated.Value;
}
