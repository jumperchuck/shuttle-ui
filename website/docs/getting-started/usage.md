---
sidebar_position: 2
---

# 使用

在程序入口用ShuttleUIProvider包裹，使用context来实现theme和colorMode的传递

## 设置ShuttleUIProvider

```SnackPlayer
import React from 'react';
import { ShuttleUIProvider, Box, Button } from '@shuttle-ui/components';

const App = () => {
  return (
    <ShuttleUIProvider>
      <Box flex={1} center>
        <Button>Hello World</Button>
      </Box>
    </ShuttleUIProvider>
  )
}

export default App;
```

## 自定义主题（可选）

```SnackPlayer
import React from 'react';
import { ShuttleUIProvider, Box, Button, createTheme } from '@shuttle-ui/components';

const theme = createTheme({ colors: { primary: 'red' } });

const App = () => {
  return (
    <ShuttleUIProvider theme={theme}>
      <Box flex={1} center>
        <Button>Hello World</Button>
      </Box>
    </ShuttleUIProvider>
  )
}

export default App;
```

## 自定义颜色模式（可选）

```SnackPlayer
import React from 'react';
import { useColorScheme } from 'react-native';
import { ShuttleUIProvider, Box, Button, createTheme } from '@shuttle-ui/components';

const theme = createTheme({ colors: {} });

const App = () => {
  const colorMode = useColorScheme();
  return (
    <ShuttleUIProvider theme={theme} colorMode={colorMode}>
      <Box flex={1} center>
        <Button>Hello World</Button>
      </Box>
    </ShuttleUIProvider>
  )
}

export default App;
```

## Provider Props

| 参数        | 类型     | 说明   | 默认值           |
| --------- | ------ | ---- | ------------- |
| theme     | object | 主题配置 | Default Theme |
| colorMode | string | 颜色模式 | -             |
