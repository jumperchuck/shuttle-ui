import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { object } from '@storybook/addon-knobs';
import { Card, Text, Divider, Button } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';
import bgBlank from '../assets/bg_blank.png';

export const cardProps = () => {
  const groupId = 'card';
  return {
    wrapperStyle: object('wrapperStyle', {}, groupId),
  };
};

storiesOf('Card', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Basic" usage="The basic card">
        <Card {...cardProps()}>
          <Card.Title>Title</Card.Title>
          <Divider color="#e0e0e0" />
          <Card.Content>
            <Text>No Bug</Text>
          </Card.Content>
          <Card.Cover source={bgBlank}>
            <Card.Title>Title</Card.Title>
            <Text>Content</Text>
            <Text>Content</Text>
            <Text>Content</Text>
          </Card.Cover>
          <Card.Content>
            <Button>VIEW NOW</Button>
          </Card.Content>
        </Card>
      </UseCase>
    </>
  ));
