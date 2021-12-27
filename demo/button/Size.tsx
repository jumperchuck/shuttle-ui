import React from 'react';
import { Button, Space } from '@shuttle-ui/components';

export const Title = 'Size';

export const Description = '传递size参数来设置组件大小，可以通过theme来扩展修改此参数';

export const Example = () => {
  return (
    <Space direction="column" center>
      <Button size="xs" loading>
        Button(xs)
      </Button>
      <Button size="sm" loading>
        Button(sm)
      </Button>
      <Button size="md" loading>
        Button(md)
      </Button>
      <Button size="lg" loading>
        Button(lg)
      </Button>
    </Space>
  );
};
