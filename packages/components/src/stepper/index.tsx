/**
 * Stepper
 */
import React from 'react';
import { StyleSheet } from 'react-native';

import Space from '../space';
import Button from '../button';
import Text from '../text';

export interface StepperProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const Stepper: React.FC<StepperProps> = (props) => {
  const { min = 0, max = 99, step = 1, value, onChange, disabled } = props;

  const add = () => {
    if (value >= max) return;
    const newValue = value + step;
    onChange(newValue > max ? max : newValue);
  };

  const reduce = () => {
    if (value <= min) return;
    const newValue = value - step;
    onChange(newValue < min ? min : newValue);
  };

  return (
    <Space>
      <Button
        onPress={reduce}
        disabled={disabled}
        style={styles.button}
        paddingX={0}
        type="outline"
        color="accent"
      >
        -
      </Button>

      <Text style={styles.value} borderColor="accent">
        {value}
      </Text>

      <Button
        onPress={add}
        disabled={disabled}
        style={styles.button}
        paddingX={0}
        type="outline"
        color="accent"
      >
        +
      </Button>
    </Space>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
  },
  value: {
    minWidth: 30,
    height: 30,
    lineHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
  },
});
