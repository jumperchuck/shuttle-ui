import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { Box, Button, Overlay, Space } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';

const PortalCase1 = () => {
  const [list, setList] = useState<number[]>([]);
  return (
    <>
      <Button onPress={() => setList([...list, 1])}>ADD BUTTON</Button>
      <Overlay.Portal>
        <Box>
          {list.map((item, i) => (
            <Button
              key={i}
              onPress={() => {
                list.splice(i, 1);
                setList([...list]);
              }}
            >
              REMOVE {i}
            </Button>
          ))}
        </Box>
      </Overlay.Portal>
    </>
  );
};

const PortalCase2 = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button>SHOW ABSOLUTE</Button>
      <Overlay.Portal>
        {visible ? <Box flex={1} onPress={() => setVisible(false)} /> : null}
      </Overlay.Portal>
    </>
  );
};

storiesOf('Overlay', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Portal', () => (
    <>
      <UseCase title="Portal" usage="The top view">
        <Space direction="column">
          <PortalCase1 />
          <PortalCase2 />
        </Space>
      </UseCase>
    </>
  ))
  .add('static method', () => (
    <>
      <UseCase title="Static" usage="The static method">
        <Button
          onPress={() => {
            Overlay.show(<Button>CK</Button>);
          }}
        >
          Overlay.show
        </Button>
        <Button onPress={() => {}}>Overlay.wrap</Button>
      </UseCase>
    </>
  ));
