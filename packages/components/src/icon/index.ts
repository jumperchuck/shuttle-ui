import Icon, { IconProps } from './Icon';
import { icons, registerIconType, registerIconTypes } from './getIconType';
import {
  customImages,
  registerCustomImage,
  registerCustomImages,
} from './getCustomImage';

export default Object.assign(Icon, {
  iconTypes: icons,
  registerIconType,
  registerIconTypes,
  customImages,
  registerCustomImage,
  registerCustomImages,
});

export type { IconProps };
