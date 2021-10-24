import { TextStyle, ViewStyle } from 'react-native';
import { StyleFunction } from './style';
export default function compose<T extends StyleFunction<any>[]>(
  ...styles: T
): StyleFunction<ViewStyle & TextStyle>;
