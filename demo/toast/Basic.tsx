import React from 'react';
import { Button, Space, Toast } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Description = '基本用法';

export const Example = () => {
  const show = () => {
    Toast.show({
      children: 'TEST',
    });
  };
  const update = () => {
    Toast.update({
      children: 'UPDATE',
    });
  };
  const destroy = () => {
    Toast.destroy();
  };
  return (
    <Space direction="column" center>
      <Button type="solid" onPress={show}>
        SHOW
      </Button>
      <Button type="solid" onPress={update}>
        UPDATE
      </Button>
      <Button type="solid" onPress={destroy}>
        DESTROY
      </Button>

      <Button
        type="solid"
        onPress={() =>
          Toast.show({
            position: 'top',
            children: 'TOP',
          })
        }
      >
        TOP
      </Button>
      <Button
        type="solid"
        onPress={() =>
          Toast.show({
            position: 'bottom',
            children: 'BOTTOM',
          })
        }
      >
        BOTTOM
      </Button>
      <Button
        type="solid"
        onPress={() =>
          Toast.show({
            position: 'top-left',
            children: 'TOP LEFT',
          })
        }
      >
        TOP LEFT
      </Button>
      <Button
        type="solid"
        onPress={() =>
          Toast.show({
            position: 'top-right',
            children: 'TOP RIGHT',
          })
        }
      >
        TOP RIGHT
      </Button>
      <Button
        type="solid"
        onPress={() =>
          Toast.show({
            position: 'bottom-left',
            children: 'BOTTOM LEFT',
          })
        }
      >
        BOTTOM LEFT
      </Button>
      <Button
        type="solid"
        onPress={() =>
          Toast.show({
            position: 'bottom-right',
            children: 'BOTTOM RIGHT',
          })
        }
      >
        BOTTOM RIGHT
      </Button>
    </Space>
  );
};
