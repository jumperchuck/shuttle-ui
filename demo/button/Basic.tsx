import React from 'react';
import { Button, ButtonProps, Space } from '@shuttle-ui/components';

const Basic: React.FC<ButtonProps> = (props) => {
  return (
    <Space direction="column" align={null}>
      <Button {...props}>德玛西亚</Button>
      <Button {...props} loading>
        德玛西亚
      </Button>
    </Space>
  );
};

export default Basic;
