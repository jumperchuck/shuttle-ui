import { LayoutChangeEvent } from 'react-native';
export default function useLayout(initial?: { width?: number; height?: number }): {
  width: number;
  height: number;
  onLayout: (e: LayoutChangeEvent) => void;
};
