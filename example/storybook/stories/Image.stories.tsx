import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Space, Image } from 'shuttle-ui';

import { StoryScreen, UseCase } from '../views';

storiesOf('Image', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Basic" usage="The basic image">
        <Space>
          <Image
            source={require('../assets/bg_blank.png')}
            resizeMode="cover"
            style={{ width: 50, height: 50 }}
          />
          <Image
            source={{
              uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3206689113,2237998950&fm=26&gp=0.jpg',
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </Space>
      </UseCase>
    </>
  ));
