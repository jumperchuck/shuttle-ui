# Shuttle-UI

> Mobile component library, build consistent design system for React Native & Web

[**Website**](https://jumperchuck.github.io/shuttle-ui)
<br/>
[**Documentation**](https://jumperchuck.github.io/shuttle-ui)

## Installation

```
// with npm
npm install --save @shuttle-ui/components

// with yarn
yarn add @shuttle-ui/components
```

## Usage

```tsx
import React from 'react';
import { Provider } from '@shuttle-ui/components';

const App = () => {
  return (
    <Provider>
      <Button>Hello World</Button>
    </Provider>
  )
}
```

## Using on the Web

Install
```
yarn add react-native react-native-web
```

#### Using UMI

Add to config
```js
export default {
  alias: {
    'react-native$': 'react-native-web'
  },
  extraBabelIncludes: [
    'react-native-animatable',
    'react-native-root-siblings'
  ]
}
```

#### Using create-react-app

Install @craco/craco
```
yarn add -D @craco/craco
```

...to be continued

#### Configure webpack

...to be continued

## Components

- [ ] Accordion
- [ ] ActionSheet
- [x] Avatar
  - [ ] AvatarGroup
- [x] Badge
- [x] Box
- [x] Button
  - [x] ButtonGroup
- [x] Card
  - [x] CardTitle
  - [x] CardContent
  - [x] CardCover
- [ ] Checkbox
  - [ ] CheckboxGroup
- [ ] Chip
- [ ] Container
- [x] Dialog
  - [x] DialogTitle
  - [x] DialogContent
  - [x] DialogActions
  - [ ] DialogInput
- [x] Divider
- [ ] Fab
- [ ] Form
- [x] Grid
  - [x] GridCol
  - [x] GridRow
- [x] GridList
  - [x] GridListItem
  - [x] GridListLayoutManager
- [x] GridSectionList
  - [x] GridSectionListLayoutManager
- [ ] Header
- [x] Icon
- [x] Image
- [ ] Input
- [ ] List
  - [ ] ListItem
- [ ] Menu
  - [ ] MenuItem
- [x] Modal
- [x] Overlay
- [ ] Picker
- [ ] Popover
- [ ] Progress
  - [ ] ProgressCircular
  - [ ] ProgressLinear
- [ ] Radio
  - [ ] RadioGroup
- [ ] SearchBar
- [x] Space
- [ ] Stepper
- [ ] Switch
- [ ] Table
  - [ ] TableHead
  - [ ] TableBody
  - [ ] TableFoot
  - [ ] TableRow
  - [ ] TableCell
- [ ] Tabs
- [x] Text
- [ ] Toast
- [ ] Tooltip
