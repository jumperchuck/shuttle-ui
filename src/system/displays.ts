import { ViewStyle } from 'react-native';
import style from './style';

export interface DisplaysStyleProps {
  display?: ViewStyle['display'];
  overflow?: ViewStyle['overflow'];
  opacity?: number;
}

export const display = style<ViewStyle['display']>({
  prop: ['display'],
});

export const overflow = style<ViewStyle['overflow']>({
  prop: ['overflow'],
});

export const opacity = style<number>({
  prop: ['opacity'],
});

const displays = [display, overflow, opacity] as const;

export default displays;
