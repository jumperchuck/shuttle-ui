import React from 'react';
import { Space, Avatar } from '@shuttle-ui/components';

export const Title = 'Badge';

export const Description = 'The badge avatar';

export const Example = () => {
  return (
    <Space center>
      <Avatar title="AA" bgColor="red.500">
        <Avatar.Badge bgColor="green.500" />
      </Avatar>
      <Avatar title="BB" bgColor="green.500">
        <Avatar.Badge size={15} bgColor="red.500" />
      </Avatar>
      <Avatar
        bgColor="amber.500"
        source={{
          uri: 'https://p8.itc.cn/q_70/images03/20210322/c1bcbfaa488c402286d9b0faf8e92d16.jpeg',
        }}
      >
        <Avatar.Badge bgColor="blue.500">1</Avatar.Badge>
      </Avatar>
      <Avatar
        bgColor="blue.500"
        source={{
          uri: 'https://p0.itc.cn/q_70/images03/20210322/9d1cc9f288454309b9722f1bc9548d41.jpeg',
        }}
      >
        <Avatar.Badge size={15} bgColor="yellow.500">
          2
        </Avatar.Badge>
      </Avatar>
    </Space>
  );
};
