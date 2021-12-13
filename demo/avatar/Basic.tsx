import React from 'react';
import { Space, Avatar, AvatarProps } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example: React.FC<AvatarProps> = () => {
  return (
    <Space>
      <Avatar title="AA" bgColor="red.500" />
      <Avatar title="BB" bgColor="green.500" />
      <Avatar
        bgColor="amber.500"
        source={{
          uri: 'https://p8.itc.cn/q_70/images03/20210322/c1bcbfaa488c402286d9b0faf8e92d16.jpeg',
        }}
      />
      <Avatar
        bgColor="blue.500"
        source={{
          uri: 'https://p0.itc.cn/q_70/images03/20210322/9d1cc9f288454309b9722f1bc9548d41.jpeg',
        }}
      />
    </Space>
  );
};
