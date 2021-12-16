import React from 'react';
import { ImageProps, ImageSourcePropType, StyleSheet } from 'react-native';
import { withTheme } from '@shuttle-ui/theme';
import { renderNode, RenderProps } from '@shuttle-ui/utils';

import { Box, BoxProps } from '../box';
import { Icon, IconProps } from '../icon';
import { Text, TextProps } from '../text';
import { Image } from '../image';

export interface AvatarProps extends BoxProps {
  title?: RenderProps<TextProps>;
  titleStyle?: TextProps['style'];
  icon?: RenderProps<IconProps>;
  iconStyle?: IconProps['style'];
  source?: ImageSourcePropType;
  imageStyle?: ImageProps['style'];
  size?: number;
}

export const Avatar = (props: AvatarProps & { theme: ShuttleUI.Theme }) => {
  const {
    title,
    titleStyle,
    icon,
    iconStyle,
    source,
    imageStyle,
    size = 40,
    style: styleProp,
    children,
    ...rest
  } = props;

  const style = [
    styles.container,
    {
      height: size,
      width: size,
      borderRadius: size / 2,
    },
    styleProp,
  ];

  const Placeholder = title
    ? renderNode(Text, title, {
        style: titleStyle,
        color: 'white',
        size: size / 2,
        theme: rest.theme,
      })
    : icon
    ? renderNode(Icon, typeof icon === 'string' ? { name: icon } : icon, {
        style: iconStyle,
        color: 'white',
        size: size / 2,
        theme: rest.theme,
      })
    : null;

  if (source) {
    return (
      <Image
        source={source}
        resizeMode="cover"
        containerStyle={style}
        bgColor="grey.400"
        Placeholder={Placeholder}
        style={[{ borderRadius: size / 2 }, imageStyle]}
        {...rest}
      >
        {children}
      </Image>
    );
  }

  return (
    <Box bgColor="grey.400" style={style} {...rest}>
      {Placeholder}
      {children}
    </Box>
  );
};

export default withTheme(Avatar, 'Avatar');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
});