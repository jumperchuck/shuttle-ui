import { createText, TextProps } from '../../system';
import { withTheme } from '../../themes';

export const Text = createText();

export default withTheme(Text, 'Text');
export { TextProps };
