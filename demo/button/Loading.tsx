import React from 'react';
import { Button, Space } from '@shuttle-ui/components';

export const Title = 'Loading';

export const Description = '传递loading参数显示加载状态并且禁止点击';

export const Example = () => {
  return (
    <Space direction="column" center>
      <Button type="outline" loading>
        Outline
      </Button>
      <Button type="solid" loading>
        Solid
      </Button>
      <Button type="text" loading>
        Text
      </Button>
      <Button leftLoading>Left Loading</Button>
      <Button rightLoading>Left Loading</Button>
    </Space>
  );
};
