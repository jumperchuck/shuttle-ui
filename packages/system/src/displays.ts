import { ViewStyle } from 'react-native';

import style from './style';
import compose from './compose';
import { ResponsiveProps } from './types';

export type DisplaysStyleProps = ResponsiveProps<{
  display: ViewStyle['display'];
  overflow: ViewStyle['overflow'];
  opacity: number;
}>;

export const display = style<ViewStyle['display']>({
  prop: ['display'],
});

export const overflow = style<ViewStyle['overflow']>({
  prop: ['overflow'],
});

export const opacity = style<number>({
  prop: ['opacity'],
});

export default compose(display, overflow, opacity);
