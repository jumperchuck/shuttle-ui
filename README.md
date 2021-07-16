# shuttle-ui

> react / react native 移动端组件库

## Installation

```
npm install --save shuttle-ui
# or
yarn add shuttle-ui
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

#### Load the React-Native-Vector-Icons

Install
```
yarn add react-native-vector-icons
```

```jsx
import { Platform } from 'react-native';
import { Provider } from 'peregi-ui-mobile';
import 'peregi-ui-mobile/src/registerRNIcons';

<Provider>
  <>
    {Platform.OS === 'web' ? (  
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
        ...other icons
      `}</style>
    ) : null}
    <App />
  </>
</Provider>
```

## Components

- [ ] Accordion
- [ ] ActionSheet
- [x] Avatar
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
