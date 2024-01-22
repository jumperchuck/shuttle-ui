import React from 'react';
import { Text, GridList, Card, Divider, Button } from '@shuttle-ui/components';

export const Title = 'Basic';

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

export const Example = () => {
  return (
    <GridList
      data={data}
      col={4}
      row={3}
      spacing={10}
      style={{ width: '100%', height: 600 }}
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
