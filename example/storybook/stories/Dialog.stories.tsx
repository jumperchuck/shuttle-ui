import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, Dialog, Space } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';

const BasicDialog = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onPress={() => setVisible(true)}>SHOW DIALOG</Button>
      <Dialog isVisible={visible}>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Content>Content</Dialog.Content>
        <Dialog.Content>
          <Dialog.Input />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>CANCEL</Button>
          <Button onPress={() => setVisible(false)}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};

storiesOf('Dialog', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Basic" usage="The basic dialog">
        <BasicDialog />
      </UseCase>
    </>
  ))
  .add('static method', () => (
    <UseCase title="Static" usage="The static method">
      <Space direction="column" align={null}>
        <Button
          onPress={() => {
            Dialog.alert({
              title: 'Title',
              content: 'Content',
            });
          }}
        >
          Dialog.alert
        </Button>
        <Button
          onPress={() => {
            Dialog.prompt({
              title: 'Title',
              onConfirm: (value) => {
                alert(value);
              },
            });
          }}
        >
          Dialog.prompt
        </Button>
      </Space>
    </UseCase>
  ));
