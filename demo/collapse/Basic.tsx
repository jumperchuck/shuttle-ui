import React from 'react';
import { Collapse, Space, Text } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  return (
    <>
      <Collapse defaultActive>
        <Collapse.Header>
          <Collapse.Arrow />
          <Text>Header</Text>
        </Collapse.Header>
        <Collapse.Content>
          <Text>123</Text>
          <Text>456</Text>
          <Text>789</Text>
          <Text>000</Text>
        </Collapse.Content>
      </Collapse>

      <Collapse mt="md">
        <Collapse.Header bgColor="grey.100">
          <Collapse.Arrow />
          <Text>Header</Text>
        </Collapse.Header>
        <Collapse.Content>
          <Text>123</Text>
          <Text>456</Text>
          <Text>789</Text>
          <Text>000</Text>
        </Collapse.Content>
      </Collapse>
    </>
  );
};
