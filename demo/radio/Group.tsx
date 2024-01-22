import React from 'react';
import { Radio } from '@shuttle-ui/components';

export const Title = 'Group';

export const Example = () => {
  return (
    <Radio.Group
      radioProps={{ bgColor: 'red', iconPlacement: 'left' }}
      activatedProps={{ bgColor: 'blue', color: 'yellow' }}
    >
      <Radio>Value 1</Radio>
      <Radio>Value 2</Radio>
      <Radio value="3">Value 2</Radio>
    </Radio.Group>
  );
};
