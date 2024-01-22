import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';

storiesOf('Table', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/table/Basic')} />
    </>
  ));
