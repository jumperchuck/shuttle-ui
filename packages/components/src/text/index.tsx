import { createText, TextProps } from '@shuttle-ui/system';
import { withTheme } from '@shuttle-ui/theme';

export const Text = createText();

export default withTheme(Text, 'Text') as typeof Text;
export { TextProps };
