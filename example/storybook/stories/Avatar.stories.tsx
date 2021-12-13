import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';

storiesOf('Avatar', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/avatar/Basic')} />
      <UseCase demo={require('../../../demo/avatar/Size')} />
      <UseCase demo={require('../../../demo/avatar/Icon')} />
      <UseCase demo={require('../../../demo/avatar/Fallback')} />
      <UseCase demo={require('../../../demo/avatar/Badge')} />
      <UseCase demo={require('../../../demo/avatar/Group')} />
    </>
  ));
