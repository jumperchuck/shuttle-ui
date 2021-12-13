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
import { withTheme } from '@shuttle-ui/theme';

import { Box, BoxProps } from '../box';

export interface ImageProps
  extends BoxProps,
    Omit<RNImageProps, 'width' | 'height' | 'borderRadius'> {
  Placeholder?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
}

export const Image: React.FC<ImageProps & { theme: ShuttleUI.Theme }> = (props) => {
  const {
    Placeholder = <ActivityIndicator />,
    containerStyle,
    style,
    onLoad: onLoadProp,
    source,
    width,
    height,
    borderRadius,
    onLayout,
    children,
    ...rest
  } = props;

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
      onLayout={onLayout}
      style={[styles.container, containerStyle]}
      {...rest}
    >
      {loading ? <View style={styles.placeholder}>{Placeholder}</View> : null}
      <RNImage style={[styles.image, style]} source={source} onLoad={onLoad} {...rest} />
      {children}
    </Box>
  );
};

export default withTheme(Image, 'Image');

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
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
