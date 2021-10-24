import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, Grid, Text } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';

storiesOf('Grid', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Row" usage="The row">
        <Grid height={200}>
          <Grid.Row bgColor="red" />
          <Grid.Row bgColor="green" />
        </Grid>
      </UseCase>
      <UseCase title="Col" usage="The col">
        <Grid height={200}>
          <Grid.Col bgColor="red" />
          <Grid.Col bgColor="green" />
        </Grid>
      </UseCase>
      <UseCase title="Mixin" usage="mixin row and col">
        <Grid height={200}>
          <Grid.Col>
            <Grid.Row bgColor="red">
              <Text>CK</Text>
            </Grid.Row>
            <Grid.Row bgColor="pink" />
            <Grid.Row bgColor="grey" />
          </Grid.Col>
          <Grid.Col bgColor="green">
            <Grid.Row>
              <Grid.Col bgColor="black" />
              <Grid.Col bgColor="blue" />
            </Grid.Row>
            <Grid.Row bgColor="yellow" center>
              <Button>CK</Button>
            </Grid.Row>
          </Grid.Col>
        </Grid>
      </UseCase>
    </>
  ));
