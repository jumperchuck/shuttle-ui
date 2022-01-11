import { Platform } from 'react-native';
import { mergeProps } from '@shuttle-ui/utils';

export default function usePlatformProps<P extends {}>(props: P) {
  const { _android, _ios, _web, ...other } = props as any;
  const platformProps = Platform.select({
    android: _android,
    ios: _ios,
    default: _web,
  });
  return mergeProps(other, platformProps) as P;
}
