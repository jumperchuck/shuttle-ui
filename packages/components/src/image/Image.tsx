import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useThemeConfigProps, withTheme } from '@shuttle-ui/theme';
import { withColorMode } from '@shuttle-ui/color-mode';

import { ShuttleUIProps } from '../types';
import { Box, BoxProps } from '../box/Box';

export interface ImageProps
  extends BoxProps,
    Omit<
      RNImageProps,
      | 'width'
      | 'height'
      | 'borderRadius'
      | 'borderTopLeftRadius'
      | 'borderTopRightRadius'
      | 'borderBottomLeftRadius'
      | 'borderBottomRightRadius'
    > {
  Placeholder?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
}

export const Image = (props: ShuttleUIProps<ImageProps>) => {
  const {
    Placeholder = <ActivityIndicator />,
    containerStyle,
    style,
    onLoad: onLoadProp,
    source,
    width,
    height,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    onLayout,
    children,
    ...rest
  } = useThemeConfigProps('Image', props);

  const [loading, setLoading] = useState(true);

  const onLoad: ImageProps['onLoad'] = useCallback(
    (event) => {
      onLoadProp?.(event);
      setLoading(false);
    },
    [onLoadProp],
  );

  return (
    <Box
      width={width}
      height={height}
      borderRadius={borderRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRadius={borderBottomRightRadius}
      onLayout={onLayout}
      position="relative"
      overflow="hidden"
      style={containerStyle}
      {...rest}
    >
      {loading ? <View style={styles.placeholder}>{Placeholder}</View> : null}
      <RNImage style={[styles.image, style]} source={source} onLoad={onLoad} {...rest} />
      {children}
    </Box>
  );
};

export default withColorMode(withTheme(Image, 'Image'));

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
