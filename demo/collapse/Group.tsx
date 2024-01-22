import React from 'react';
import { Collapse, Text } from '@shuttle-ui/components';

export const Title = 'Group';

export const Example = () => {
  return (
    <Collapse.Group defaultActiveKeys={[0]}>
      <Collapse>
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

      <Collapse>
        <Collapse.Header bgColor="grey.100">
          <Collapse.Arrow />
          <Text>Header</Text>
        </Collapse.Header>
        <Collapse.Content borderTop={0}>
          <Text>123</Text>
          <Text>456</Text>
          <Text>789</Text>
          <Text>000</Text>
        </Collapse.Content>
      </Collapse>
    </Collapse.Group>
  );
};
