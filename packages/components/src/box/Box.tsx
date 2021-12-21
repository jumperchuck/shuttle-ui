import { TouchableOpacityProps } from 'react-native';
import { createBox, BoxProps, BoxStyleProps, BoxFC } from '@shuttle-ui/system';
import { DefaultTheme, withTheme } from '@shuttle-ui/theme';
import { withColorMode, WithColorModeProps } from '@shuttle-ui/color-mode';

export type { BoxProps };

export const Box = createBox(DefaultTheme);

export default withColorMode(withTheme(Box, 'Box')) as BoxFC<
  TouchableOpacityProps,
  WithColorModeProps<TouchableOpacityProps & BoxStyleProps>
>;
