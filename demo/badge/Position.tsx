import React from 'react';
import { Badge, Space, Box } from '@shuttle-ui/components';

export const Title = 'Position';

export const Example = () => {
  return (
    <Space center>
      <Box width={50} height={50} bgColor="grey">
        <Badge position="absolute" right={-10} top={-10} bgColor="blue">
          12
        </Badge>
      </Box>
      <Box width={50} height={50} bgColor="grey">
        <Badge position="absolute" right={-10} bottom={-10}>
          3
        </Badge>
      </Box>
    </Space>
  );
};
