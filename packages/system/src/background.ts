import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet } from 'react-native';

import { ColorPropType, ResponsiveProps } from './types';
import { colorTransform } from './utils';
import style from './style';
import compose from './compose';

export type BackgroundStyleProps = ResponsiveProps<{
  backgroundColor: ColorPropType;
  bgColor: ColorPropType;
  backgroundImage: ImageSourcePropType;
  bgImage: ImageSourcePropType;
}>;

export const bgColor = style<string>({
  prop: ['backgroundColor', 'bgColor'],
  themeKey: 'colors',
  transform: colorTransform,
});

export const bgImage = style<undefined>({
  prop: ['backgroundImage', 'bgImage'],
  styleKey: false,
  transform: (value, props) => {
    if (value) {
      props.children = React.createElement(
        ImageBackground,
        {
          source: value as ImageSourcePropType,
          resizeMode: 'contain',
          style: StyleSheet.absoluteFillObject,
        },
        props.children,
      );
    }
    return undefined;
  },
});

export default compose(bgColor, bgImage);
