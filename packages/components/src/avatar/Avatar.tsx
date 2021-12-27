import React from 'react';
import { ImageProps, ImageSourcePropType, StyleSheet } from 'react-native';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';
import { renderNode, RenderProps } from '@shuttle-ui/utils';

import { ShuttleUIComponent, ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';
import { Icon, IconProps } from '../icon/Icon';
import { Text, TextProps } from '../text/Text';
import { Image } from '../image/Image';

export interface AvatarProps extends BoxProps {
  title?: RenderProps<TextProps>;
  titleProps?: TextProps;
  icon?: RenderProps<IconProps>;
  iconProps?: IconProps;
  source?: ImageSourcePropType;
  imageStyle?: ImageProps['style'];
  size?: number;
}

export const Avatar: ShuttleUIComponent<AvatarProps> = (props) => {
  const {
    title,
    titleProps,
    icon,
    iconProps,
    source,
    imageStyle,
    bgColor = 'grey.400',
    size = 40,
    style,
    children,
    theme,
    colorMode,
    ...rest
  } = useThemeConfigProps('Avatar', props);

  const borderRadius = size / 2;

  const boxProps: ShuttleUIProps<BoxProps> = {
    center: true,
    height: size,
    width: size,
    bgColor,
    borderRadius,
    theme,
    colorMode,
    ...rest,
  };

  const Placeholder = title
    ? renderNode(Text, title, {
        color: 'white',
        size: borderRadius,
        theme,
        colorMode,
        ...titleProps,
      })
    : icon
    ? renderNode(Icon, typeof icon === 'string' ? { name: icon } : icon, {
        color: 'white',
        size: borderRadius,
        theme,
        colorMode,
        ...iconProps,
      })
    : null;

  if (source) {
    return (
      <Image
        source={source}
        Placeholder={Placeholder}
        resizeMode="cover"
        {...boxProps}
        containerStyle={[styles.container, style]}
        style={[{ borderRadius }, imageStyle]}
      >
        {children}
      </Image>
    );
  }

  return (
    <Box {...boxProps} style={style}>
      {Placeholder}
      {children}
    </Box>
  );
};

export default withColorMode(withTheme(Avatar, 'Avatar'));

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
  },
});
