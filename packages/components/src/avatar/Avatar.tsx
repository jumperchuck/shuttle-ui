import React from 'react';
import { ImageProps, ImageSourcePropType, StyleSheet } from 'react-native';
import { renderNode, RenderProps } from '@shuttle-ui/utils';

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
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
    ...rest
  } = useResolutionProps('Avatar', props);

  const borderRadius = size / 2;

  const boxProps: BoxProps = {
    center: true,
    height: size,
    width: size,
    bgColor,
    borderRadius,
    ...rest,
  };

  const Placeholder = title
    ? renderNode(Text, title, {
        color: 'white',
        size: borderRadius,
        ...titleProps,
      })
    : icon
    ? renderNode(Icon, typeof icon === 'string' ? { name: icon } : icon, {
        color: 'white',
        size: borderRadius,
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
        style={[styles.container, style]}
        imageStyle={[{ borderRadius }, imageStyle]}
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

export default withShuttleUI(Avatar);

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
  },
});
