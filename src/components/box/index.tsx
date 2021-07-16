import { createBox, BoxProps } from '../../system';
import { withTheme } from '../../themes';

export const Box = createBox();

export default withTheme(Box, 'Box');
export { BoxProps };
