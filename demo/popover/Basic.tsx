import React, { useState } from 'react';
import { Popover, Button, Text, Space, Box } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  const [placement, setPlacement] = useState<any>('top');
  const placements = [
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'left',
    'left-top',
    'left-bottom',
    'right',
    'right-top',
    'right-bottom',
  ];

  return (
    <Space direction="column">
      <Popover
        placement={placement}
        reference={({ ref, show }) => {
          return (
            <Box marginTop={100} center>
              <Button forwardedRef={ref} onPress={show} width={200}>
                PRESS ME
              </Button>
            </Box>
          );
        }}
      >
        <Popover.Container>
          <Popover.Arrow />
          <Text>Title</Text>
          <Button size="xs" disabled>
            Confirm
          </Button>
        </Popover.Container>
      </Popover>

      <Button.Group
        direction="column"
        spacing={2}
        value={[placement]}
        activatedProps={{ color: 'red' }}
        buttonProps={{}}
      >
        {placements.map((item) => (
          <Button key={item} onPress={() => setPlacement(item)}>
            {item}
          </Button>
        ))}
      </Button.Group>

      <Space>
        <Popover placement="top" reference={<Text>Top</Text>}>
          <Popover.Container>
            <Popover.Arrow />
            <Text>YES</Text>
          </Popover.Container>
        </Popover>
        <Popover placement="bottom" reference={<Text>Bottom</Text>}>
          <Popover.Container>
            <Popover.Arrow />
            <Text>YES</Text>
          </Popover.Container>
        </Popover>
        <Popover placement="left" reference={<Text>Left</Text>}>
          <Popover.Container>
            <Popover.Arrow />
            <Text>YES</Text>
          </Popover.Container>
        </Popover>
        <Popover placement="right" reference={<Text>Right</Text>}>
          <Popover.Container>
            <Popover.Arrow />
            <Text>YES</Text>
          </Popover.Container>
        </Popover>
      </Space>
    </Space>
  );
};
