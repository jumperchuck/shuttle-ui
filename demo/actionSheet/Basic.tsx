import React from 'react';
import { Text, Button, ActionSheet, useBoolean, Divider } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  const [visible, { setTrue, setFalse }] = useBoolean();
  const show = () => {
    ActionSheet.show({
      items: [
        { text: 'text' },
        { text: 'text' },
        <Divider key={2} />,
        { text: 'cancel', color: 'red' },
      ],
    });
  };
  return (
    <>
      <Button onPress={setTrue}>ActionSheet</Button>
      <Button onPress={show}>SHOW</Button>
      <ActionSheet visible={visible} onClose={setFalse}>
        <ActionSheet.Container>
          <ActionSheet.Item icon={{ type: 'ant-design', name: 'delete' }}>
            Delete
          </ActionSheet.Item>
          <ActionSheet.Item
            rightIcon={{ type: 'ant-design', name: 'check' }}
            leftLoading
            disabled
          >
            Add
          </ActionSheet.Item>
          <ActionSheet.Item>Three</ActionSheet.Item>
        </ActionSheet.Container>
      </ActionSheet>
    </>
  );
};
