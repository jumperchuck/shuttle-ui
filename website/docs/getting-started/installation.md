---
sidebar_position: 1
slug: /
---

# 安装

Shuttle UI是用于React Native和Web的移动端UI框架，提供组件包，主题包，以及自定义的设计系统

## 安装依赖

```bash
// 使用npm
npm install @shuttle-ui/components @shuttle-ui/theme

// 使用yarn
yarn add @shuttle-ui/components @shuttle-ui/theme
```

## 安装react-native-vector-icons

如果你不想使用react-native-vector-icons里的图标，这一步可以跳过

```bash
// 使用npm
npm install react-native-vector-icons

// 使用yarn
yarn add react-native-vector-icons
```

> 注册react-native-vector-icons的图标

```javascript
import '@shuttle-ui/components/dist/registerRNIcons'
```
