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

import { ShuttleUIComponent } from '../types';
import { withShuttleUI } from '../helper';
import { useResolutionProps } from '../hooks';
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
      | 'style'
    > {
  Placeholder?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const Image: ShuttleUIComponent<ImageProps> = (props) => {
  const {
    Placeholder = <ActivityIndicator />,
    style,
    imageStyle,
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
  } = useResolutionProps('Image', props);

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
      style={style}
      {...rest}
    >
      {loading ? <View style={styles.placeholder}>{Placeholder}</View> : null}
      <RNImage
        style={[styles.image, imageStyle]}
        source={source}
        onLoad={onLoad}
        {...rest}
      />
      {children}
    </Box>
  );
};

export default withShuttleUI(Image);

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
