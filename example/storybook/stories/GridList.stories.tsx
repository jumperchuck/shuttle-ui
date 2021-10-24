import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Button, Card, Divider, GridList, Text } from '@shuttle-ui/components';

import { UseCase } from '../views';

const data = Array(1000)
  .fill('')
  .flatMap(() => [
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 2,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 2,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 1,
    },
  ]);

const VerticalList = () => {
  return (
    <GridList
      data={data}
      col={4}
      row={3}
      spacing={10}
      style={{ height: 600 }}
      renderItem={({ index }) => (
        <Card>
          <Card.Title>Title {index}</Card.Title>
          <Divider color="#e0e0e0" />
          <Card.Content flex={1}>
            <Text>No Bug</Text>
          </Card.Content>
          <Card.Content>
            <Button>VIEW NOW</Button>
          </Card.Content>
        </Card>
      )}
      getItemLayout={(_, index) => _[index]}
    />
  );
};

const HorizontalList = () => {
  return (
    <GridList
      data={data}
      col={3}
      row={3}
      spacing={10}
      style={{
        height: 600,
      }}
      renderItem={({ index }) => (
        <Card>
          <Card.Title>Title {index}</Card.Title>
          <Divider color="#e0e0e0" />
          <Card.Content flex={1}>
            <Text>No Bug</Text>
          </Card.Content>
          <Card.Content>
            <Button>VIEW NOW</Button>
          </Card.Content>
        </Card>
      )}
      getItemLayout={(_, index) => _[index]}
      horizontal
    />
  );
};

storiesOf('GridList', module)
  .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
  .add('vertical list', () => (
    <UseCase title="Vertical" usage="The vertical list">
      <VerticalList />
    </UseCase>
  ))
  .add('horizontal list', () => (
    <UseCase title="Horizontal" usage="The horizontal list">
      <HorizontalList />
    </UseCase>
  ));
