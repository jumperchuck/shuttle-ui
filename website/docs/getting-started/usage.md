---
sidebar_position: 2
---

# 使用

先教你怎么用

## 快速入门

```SnackPlayer name=App.js
import React from 'react';
import { Provider, Box, Button } from '@shuttle-ui/components';

const App = () => {
  return (
    <Provider>
      <Box flex={1} center>
        <Button>Hello World</Button>
      </Box>
    </Provider>
  )
}

export default App;
```

## 自定义主题（可选）

```SnackPlayer name=App.js
import React from 'react';
import { Provider, Box, Button } from '@shuttle-ui/components';
import { createTheme } from '@shuttle-ui/theme'

const theme = createTheme({ colors: { primary: 'red' } });

const App = () => {
  return (
    <Provider theme={theme}>
      <Box flex={1} center>
        <Button>Hello World</Button>
      </Box>
    </Provider>
  )
}

export default App;
```

## Provider Props

| Name       | Type   | Description                | Default       |
| ---------- | ------ | -------------------------- | ------------- |
| theme      | Object | 主题配置                    | Default Theme |
| colorMode  | String | 颜色模式,light亮色,dark暗黑  | -             |
