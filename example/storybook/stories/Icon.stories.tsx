import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Space, Icon } from 'shuttle-ui';

import { StoryScreen, UseCase } from '../views';

storiesOf('Icon', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Basic" usage="The basic icon">
        <Space>
          <Icon name="info" />
          <Icon name="language" />
        </Space>
      </UseCase>
    </>
  ));
