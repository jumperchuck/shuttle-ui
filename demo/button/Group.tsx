import React from 'react';
import { Button, ButtonGroupProps, Space } from '@shuttle-ui/components';

export const Title = 'ButtonGroup';

export const Example: React.FC<ButtonGroupProps> = (props) => {
  return (
    <Space center>
      <Button.Group {...props}>
        <Button key="1">1</Button>
        <Button key="2">2</Button>
        <Button key="3">3</Button>
      </Button.Group>
    </Space>
  );
};
