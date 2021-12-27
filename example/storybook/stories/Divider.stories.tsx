import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, Divider, Space, Text } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';

storiesOf('Divider', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Basic" usage="The basic divider">
        <Space direction="column">
          <Divider />
          <Divider color="red" />
          <Divider color="green" />
          <Divider color="blue" />
        </Space>
      </UseCase>
      <UseCase title="Containing Children" usage="">
        <Space direction="column">
          <Divider />
          <Divider color="red">
            <Button.Group>
              <Button>CK</Button>
              <Button>CK</Button>
            </Button.Group>
          </Divider>
          <Divider color="green">
            <Button>CK</Button>
          </Divider>
          <Divider color="blue">
            <Text>CK</Text>
          </Divider>
          <Divider>
            <Text>CK</Text>
          </Divider>
        </Space>
      </UseCase>
    </>
  ));
