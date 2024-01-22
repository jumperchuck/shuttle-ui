import React from 'react';
import { Button, Space } from '@shuttle-ui/components';

export const Title = 'Button Group';

export const Description =
  '通过Button.Group包裹的按钮，可以传递buttonProps、activatedProps、value参数处理';

export const Example = () => {
  return (
    <Space center>
      <Button.Group
        value={['2']}
        buttonProps={{ type: 'text' }}
        activatedProps={{ type: 'solid' }}
        spacing={0}
        borderWidth={1}
        borderColor="primary"
        dividerProps={{
          width: 1,
          thickness: 'auto',
          color: 'primary',
        }}
        onChange={(value) => {
          console.log(value);
        }}
      >
        <Button value="1">One</Button>
        <Button value="2">Two</Button>
        <Button value="3">Three</Button>
      </Button.Group>
    </Space>
  );
};
