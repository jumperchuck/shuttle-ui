import React from 'react';
import { Space, Avatar, Icon } from '@shuttle-ui/components';
import { AntDesign, Entypo } from '@expo/vector-icons';

Icon.registerIconTypes({
  antd: AntDesign,
  entypo: Entypo,
});

export const Title = 'Icon';

export const Description = 'The icon avatar';

export const Example = () => {
  return (
    <Space center>
      <Avatar icon={{ type: 'antd', name: 'android1' }} bgColor="red.500" />
      <Avatar icon={{ type: 'entypo', name: 'app-store' }} bgColor="green.500" />
      <Avatar
        icon={(iconProps) => <AntDesign name="android1" {...iconProps} />}
        bgColor="red.500"
      />
      <Avatar
        icon={(iconProps) => <Entypo name="app-store" {...iconProps} />}
        bgColor="green.500"
      />
    </Space>
  );
};
