import React from 'react';
import { Space, Avatar, Icon, AvatarProps } from '@shuttle-ui/components';
// @ts-ignore
import { AntDesign, Entypo } from '@expo/vector-icons';

Icon.registerIconTypes({
  name1: AntDesign,
  name2: Entypo,
});

export const Title = 'Icon';

export const Description = 'The icon avatar';

export const Example: React.FC<AvatarProps> = () => {
  return (
    <Space>
      <Avatar icon={{ type: 'name1', name: 'android1' }} bgColor="red.500" />
      <Avatar icon={{ type: 'name2', name: 'app-store' }} bgColor="green.500" />
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
