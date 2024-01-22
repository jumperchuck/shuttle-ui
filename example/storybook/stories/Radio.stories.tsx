import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';

storiesOf('Radio', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/radio/Basic')} />
      <UseCase demo={require('../../../demo/radio/Group')} />
    </>
  ));
