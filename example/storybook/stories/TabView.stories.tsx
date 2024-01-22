import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';

storiesOf('TabView', module)
  .addDecorator((getStory) => <StoryScreen noScroll>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/tabView/Basic')} />
    </>
  ));
