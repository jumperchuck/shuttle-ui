import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, Dialog, Space } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';

const BasicDialog = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <>
      <Button onPress={show}>SHOW DIALOG</Button>
      <Dialog visible={visible}>
        <Dialog.Container>
          <Dialog.Close onPress={hide} />
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Content>Content</Dialog.Content>
          <Dialog.Content>
            <Dialog.Input />
          </Dialog.Content>
          <Dialog.Actions onPress={hide}>
            <Button>CANCEL</Button>
            <Button>OK</Button>
          </Dialog.Actions>
        </Dialog.Container>
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
      <Space direction="column">
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
                // @ts-ignore
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
