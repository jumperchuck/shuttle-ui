import React from 'react';
import { Button, Space } from '@shuttle-ui/components';

export const Title = 'Button Group';

export const Description =
  '通过Button.Group包裹的按钮，可以传递buttonProps、selectedKeys、buttonProps参数处理';

export const Example = () => {
  return (
    <Space center>
      <Button.Group
        selectedKeys={['2']}
        buttonProps={{ type: 'text' }}
        selectedProps={{ type: 'solid' }}
        spacing={0}
        borderWidth={1}
        borderColor="primary"
        dividerProps={{
          width: 1,
          thickness: 'auto',
          color: 'primary',
        }}
      >
        <Button key="1">One</Button>
        <Button key="2">Two</Button>
        <Button key="3">Three</Button>
      </Button.Group>
    </Space>
  );
};
