import React from 'react';
import { Button, ButtonProps, Space } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Description = 'The Basic Button';

export const Example: React.FC<ButtonProps> = (props) => {
  return (
    <Space direction="column" align={null}>
      <Button height={{ xs: 500, sm: 100 }}>德玛西亚</Button>
      <Button
        {...props}
        color="red"
        loading
        _dark={{
          color: 'yellow',
          height: {
            xs: 200,
            sm: 50,
          },
        }}
        _light={{
          color: 'black',
          height: {
            xs: 200,
            sm: 50,
          },
        }}
      >
        德玛西亚
      </Button>
      <Button color="red.400">
        德玛西亚
      </Button>
      {/*<Button {...props} color="red.600" loading>*/}
      {/*  德玛西亚*/}
      {/*</Button>*/}
      {/*<Button {...props} color="red.800" loading>*/}
      {/*  德玛西亚*/}
      {/*</Button>*/}
    </Space>
  );
};
