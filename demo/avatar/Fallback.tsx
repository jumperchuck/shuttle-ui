import React from 'react';
import { Space, Avatar } from '@shuttle-ui/components';

export const Title = 'Fallback';

export const Example = () => {
  return (
    <Space center>
      <Avatar
        bgColor="amber.500"
        title="CC"
        source={{
          uri: 'error address',
        }}
      />
      <Avatar
        bgColor="blue.500"
        title="--"
        source={{
          uri: 'error address',
        }}
      />
    </Space>
  );
};
