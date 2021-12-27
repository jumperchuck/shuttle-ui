import React from 'react';
import { Button, ButtonProps, Icon, Space } from '@shuttle-ui/components';
import { Entypo } from '@expo/vector-icons';

Icon.registerIconTypes({
  entypo: Entypo,
});

export const Title = 'Icon';

export const Description = '传递icon参数渲染图标';

export const Example: React.FC<ButtonProps> = (props) => {
  return (
    <Space direction="column" center>
      <Button
        {...props}
        type="outline"
        icon={{
          type: 'entypo',
          name: 'app-store',
        }}
      >
        Outline
      </Button>
      <Button
        {...props}
        type="solid"
        leftIcon={<Entypo name="app-store" color="white" size={16} />}
      >
        Left Icon
      </Button>
      <Button
        {...props}
        type="solid"
        rightIcon={<Entypo name="app-store" color="white" size={16} />}
      >
        Right Icon
      </Button>
    </Space>
  );
};
