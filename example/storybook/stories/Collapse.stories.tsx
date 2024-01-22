import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';

storiesOf('Collapse', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/collapse/Basic')} />
      <UseCase demo={require('../../../demo/collapse/Group')} />
    </>
  ));
