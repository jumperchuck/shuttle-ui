import { TextProps as RNTextProps } from 'react-native';
import { BoxFC, createText, TextProps, TextStyleProps } from '@shuttle-ui/system';
import { DefaultTheme, withTheme } from '@shuttle-ui/theme';
import { WithColorModeProps } from '@shuttle-ui/color-mode';

export type { TextProps };

export const Text = createText(DefaultTheme);

export default withTheme(Text, 'Text') as BoxFC<
  RNTextProps,
  WithColorModeProps<RNTextProps & TextStyleProps>
>;
