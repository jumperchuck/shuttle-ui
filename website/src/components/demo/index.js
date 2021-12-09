import React from 'react';

export default function () {
  return (
    <div className="container margin-top--md margin-bottom--xl">
      <div
        className="snack-player"
        data-snack-name="react-native demo"
        data-snack-code={demoCode}
        data-snack-dependencies="@shuttle-ui/components,@shuttle-ui/theme"
      />
    </div>
  );
}

const demoCode = `
import React from 'react';
import { Provider, Box, Button, Divider, Dialog, Text, Space } from '@shuttle-ui/components';

const App = () => {
  const confirm = () => {
    Dialog.alert({
      title: '标题',
      content: '内容'
    })
  }
  return (
    <Provider>
      <Box flex={1} center>
        <Box width={0.5} borderRadius={10} boxShadow="2" p={10}>
          <Space flex={1} spacing={5} direction="column" align={null}>
            <Text size="xl">标题</Text>
            <Divider>
              <Text size="xs">分割</Text>
            </Divider>
            <Box flex={1}>
              <Text numberOfLines={4}>
                我是谁我在哪儿我是谁我在哪儿我是谁我在哪儿我是谁我在哪儿我是谁我在哪儿我是谁我在哪儿我是谁我在哪儿我是谁我在哪儿
              </Text>
            </Box>
            <Button borderRadius={5} onPress={confirm}>确认</Button>
          </Space>
        </Box>
      </Box>
    </Provider>
  )
}

export default App;
`;
