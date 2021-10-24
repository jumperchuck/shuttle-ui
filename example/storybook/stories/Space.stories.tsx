import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { object, radios } from '@storybook/addon-knobs';
import { Button, Space } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';
import { spacingOptions } from './knbos';
import { boxProps } from './Box.stories';

const groupId = 'space';

export const spaceProps = () => {
  return {
    align: radios(
      'align',
      {
        start: 'start',
        center: 'center',
        end: 'end',
        null: null,
      },
      'center',
      groupId,
    ),
    direction: radios(
      'direction',
      {
        row: 'row',
        column: 'column',
      },
      'row',
      groupId,
    ),
    spacing: radios('spacing', spacingOptions, 'md', groupId),
    divideStyle: object('divideStyle', {}, groupId),
  };
};

storiesOf('Space', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with base', () => (
    <>
      <UseCase title="Base" usage="The base space">
        <Space {...spaceProps()} {...boxProps()}>
          <Button>德玛西亚</Button>
          <Button>德玛西亚</Button>
          <Button>德玛西亚</Button>
        </Space>
      </UseCase>
    </>
  ));
