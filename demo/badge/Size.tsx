import React from 'react';
import { Badge, Space } from '@shuttle-ui/components';

export const Title = 'Size';

export const Example = () => {
  return (
    <Space center>
      <Badge size={30}>12</Badge>
      <Badge size={10} />
    </Space>
  );
};
