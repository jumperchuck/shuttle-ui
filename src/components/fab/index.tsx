/**
 * Fab
 */
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { layouts } from '../../styles';
import Button, { ButtonProps } from '../button';
import Space from '../space';
import Overlay from '../overlay';

export interface FabProps extends ButtonProps {
  children?: React.ReactNode;
}

const Fab: React.FC<FabProps> = (props) => {
  const { children, ...rest } = props;

  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const [height, setHeight] = useState(layouts.window.height);
  const ref = useRef<TouchableOpacity>(null);

  const show = () => {
    if (ref.current) {
      ref.current.measure((x, y, w, h, pageX, pageY) => {
        setVisible(true);
        setDisplay(true);
        setLayout({ width: w, height: h, pageX, pageY });
      });
    }
  };

  const hide = () => setVisible(false);

  const child = React.Children.toArray(children)
    .filter((item) => item !== null && typeof item !== 'boolean')
    .map((item) => (typeof item === 'function' ? item(hide) : item));

  const duration = 200 + (child.length - 1) * 20;

  const k = duration / (child.length - 1);

  return (
    <>
      <Button {...rest} onPress={show} forwardedRef={ref} />
      <Overlay.Portal>
        {display && (
          <View
            style={styles.container}
            onLayout={(event) => setHeight(event.nativeEvent.layout.height)}
          >
            <TouchableWithoutFeedback onPress={hide}>
              <Animatable.View
                animation={visible ? 'fadeIn' : 'fadeOut'}
                duration={500}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}
                useNativeDriver
              />
            </TouchableWithoutFeedback>
            <Space
              direction="column"
              style={{
                position: 'absolute',
                left: layout.pageX,
                bottom: height - layout.pageY - layout.height,
                alignItems: 'flex-start',
              }}
              spacing="sm"
            >
              {child.map((item, index) => {
                return (
                  <Animatable.View
                    animation={visible ? 'fadeInUp' : 'fadeOutDown'}
                    duration={500}
                    delay={-k * index + duration}
                    onAnimationEnd={
                      index === child.length - 1
                        ? ({ finished }: any) => {
                            if (finished && !visible) {
                              setDisplay(false);
                            }
                          }
                        : undefined
                    }
                    key={index}
                    useNativeDriver
                  >
                    {item}
                  </Animatable.View>
                );
              })}
              <Button {...rest} onPress={hide} />
            </Space>
          </View>
        )}
      </Overlay.Portal>
    </>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
