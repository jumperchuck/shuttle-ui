import React from 'react';
import { Checkbox } from '@shuttle-ui/components';

export const Title = 'Group';

export const Example = () => {
  return (
    <Checkbox.Group
      checkboxProps={{ bgColor: 'red', iconPlacement: 'left' }}
      activatedProps={{ bgColor: 'blue', color: 'yellow' }}
    >
      <Checkbox>Value 1</Checkbox>
      <Checkbox>Value 2</Checkbox>
      <Checkbox value="3">Value 2</Checkbox>
    </Checkbox.Group>
  );
};
