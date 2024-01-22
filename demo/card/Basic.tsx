import React from 'react';
import { Card, Divider, Text, Button } from '@shuttle-ui/components';
import bgBlank from '../../example/storybook/assets/bg_blank.png';

export const Title = 'Basic';

export const Example = () => {
  return (
    <Card>
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
  );
};
