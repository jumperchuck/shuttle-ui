import React from 'react';
import { Button, Space } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Description = '传递type参数改变形式，有三种形式：实心（默认值）、描边、文本';

export const Example = () => {
  return (
    <Space center>
      <Button type="solid">Solid</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </Space>
  );
};
