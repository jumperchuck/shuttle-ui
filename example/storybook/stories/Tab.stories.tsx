import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';

storiesOf('Tab', module)
  .addDecorator((getStory) => <StoryScreen noScroll>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/tab/Basic')} />
    </>
  ));
