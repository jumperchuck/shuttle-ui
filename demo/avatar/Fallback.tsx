import React from 'react';
import { Space, Avatar, AvatarProps } from '@shuttle-ui/components';

export const Title = 'Fallback';

export const Example: React.FC<AvatarProps> = () => {
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
