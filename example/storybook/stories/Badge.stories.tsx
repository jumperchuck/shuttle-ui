import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';

storiesOf('Badge', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/badge/Basic')} />
      <UseCase demo={require('../../../demo/badge/Size')} />
      <UseCase demo={require('../../../demo/badge/Position')} />
    </>
  ));
