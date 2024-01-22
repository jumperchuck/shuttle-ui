import React from 'react';
import { Table, Text } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  return (
    <>
      <Table>
        <Table.Header>
          <Table.Cell>Title 1</Table.Cell>
          <Table.Cell>Title 2</Table.Cell>
          <Table.Cell>Title 3</Table.Cell>
          <Table.Cell>Title 4</Table.Cell>
        </Table.Header>

        <Table.Row>
          <Table.Cell>Content 1</Table.Cell>
          <Table.Cell>Content 2</Table.Cell>
          <Table.Cell>Content 3</Table.Cell>
          <Table.Cell>Content 4</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Content 1</Table.Cell>
          <Table.Cell>Content 2</Table.Cell>
          <Table.Cell>Content 3</Table.Cell>
          <Table.Cell>Content 4</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Content 1</Table.Cell>
          <Table.Cell>Content 2</Table.Cell>
          <Table.Cell>Content 3</Table.Cell>
          <Table.Cell>Content 4</Table.Cell>
        </Table.Row>

        <Table.Footer>
          <Table.Cell>OK</Table.Cell>
        </Table.Footer>
      </Table>
    </>
  );
};
