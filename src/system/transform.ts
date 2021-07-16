import { ViewStyle } from 'react-native';
import style from './style';

export interface TransformStyleProps {
  transform?: ViewStyle['transform'];
}

export const transform = style<ViewStyle['transform']>({
  prop: ['transform'],
});

export default [transform] as const;
