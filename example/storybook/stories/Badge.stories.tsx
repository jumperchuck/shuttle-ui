import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { color, number } from '@storybook/addon-knobs';
import { Space, Badge, Text } from 'shuttle-ui';

import { StoryScreen, UseCase } from '../views';

export const badgeProps = () => {
  const groupId = 'badge';
  return {
    size: number('size', 20, undefined, groupId),
    color: color('color', 'white', groupId),
    bgColor: color('bgColor', 'red', groupId),
  };
};

storiesOf('Badge', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Basic" usage="The basic Badge">
        <Space>
          <Badge {...badgeProps()}>12</Badge>
          <Badge {...badgeProps()}>4567</Badge>
          <View>
            <Text>德玛西亚</Text>
            <Badge
              {...badgeProps()}
              style={{ position: 'absolute', right: -10, top: -10 }}
            >
              12
            </Badge>
          </View>
        </Space>
      </UseCase>
    </>
  ));
