import { useColorModeProps } from '@shuttle-ui/color-mode';
import { useThemeProps } from '@shuttle-ui/theme';

import '../theme';

export default function useResolutionProps<P extends {}>(
  componentKey: string,
  props: P,
  config?: {
    useDefaultProps?: boolean;
    useConfigProps?: boolean;
    responsiveProps?: string[];
  },
) {
  const colorModeProps = useColorModeProps(props);
  return useThemeProps(componentKey, colorModeProps, {
    useDefaultProps: false,
    useConfigProps: true,
    ...config,
  });
}
