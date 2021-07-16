import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Space, Avatar } from 'shuttle-ui';

import { StoryScreen, UseCase } from '../views';

storiesOf('Avatar', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Title" usage="The title avatar">
        <Space>
          <Avatar title="CK" />
          <Avatar title="MD" titleStyle={{ color: 'red' }} bgColor="success" />
        </Space>
      </UseCase>
      <UseCase title="Icon" usage="The icon avatar">
        <Space>
          <Avatar icon="info" />
          <Avatar icon={{ name: 'language', color: 'red' }} bgColor="black" />
        </Space>
      </UseCase>
      <UseCase title="Source" usage="The image avatar">
        <Space>
          <Avatar title="CK" source={require('../assets/bg_blank.png')} />
          <Avatar
            icon="info"
            source={{
              uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3206689113,2237998950&fm=26&gp=0.jpg',
            }}
          />
        </Space>
      </UseCase>
    </>
  ));
