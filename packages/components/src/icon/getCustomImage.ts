import { ImageSourcePropType } from 'react-native';

export const customImages: Record<string, ImageSourcePropType> = {};

export const registerCustomImage = (name: string, image: ImageSourcePropType) => {
  customImages[name] = image;
};

export const registerCustomImages = (images: Record<string, ImageSourcePropType>) => {
  Object.assign(customImages, images);
};

export default (name: string) => {
  return customImages[name];
};
