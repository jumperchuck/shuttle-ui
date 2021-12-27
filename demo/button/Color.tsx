import React from 'react';
import { Button, Divider, Space, Text } from '@shuttle-ui/components';

export const Title = 'Color';

export const Description = '传递color参数来自定义颜色，可以是theme配置中的颜色';

export const Example = () => {
  return (
    <Space direction="column" center>
      <Text weight="bold" size="lg">
        Solid
      </Text>
      <Space direction="column">
        <Button type="solid" color="primary">
          Primary
        </Button>
        <Button type="solid" color="secondary">
          Secondary
        </Button>
        <Button type="solid" disabled>
          Disabled
        </Button>
        <Divider />
      </Space>

      <Text weight="bold" size="lg">
        Outline
      </Text>
      <Space direction="column">
        <Button type="outline" color="primary">
          Primary
        </Button>
        <Button type="outline" color="secondary">
          Secondary
        </Button>
        <Button type="outline" disabled>
          Disabled
        </Button>
        <Divider />
      </Space>

      <Text weight="bold" size="lg">
        Text
      </Text>
      <Space direction="column">
        <Button type="text" color="primary">
          Primary
        </Button>
        <Button type="text" color="secondary">
          Secondary
        </Button>
        <Button type="text" disabled>
          Disabled
        </Button>
      </Space>
    </Space>
  );
};
