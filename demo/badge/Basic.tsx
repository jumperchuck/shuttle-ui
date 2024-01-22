import React from 'react';
import { Badge, Space } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  return (
    <Space center>
      <Badge>12</Badge>
      <Badge bgColor="blue">12</Badge>
      <Badge bgColor="grey.400" color="grey.900">
        12
      </Badge>
      <Badge />
    </Space>
  );
};
