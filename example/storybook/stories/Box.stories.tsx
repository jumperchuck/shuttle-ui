import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { number, radios, select } from '@storybook/addon-knobs';

import { colorOptions, radiusOptions, spacingOptions } from './knbos';
import { StoryScreen, UseCase } from '../views';

const groupId = 'box';

export const boxFlexboxProps = () => {
  return {
    flex: number('flex', 1, undefined, groupId),
  };
};

export const boxDisplayProps = () => {
  return {
    opacity: number('opacity', 1, undefined, groupId),
  };
};

export const boxBackgroundProps = () => {
  return {
    bgColor: select('bgColor', colorOptions, 'foreground', groupId),
  };
};

export const boxBorderProps = () => {
  return {
    border: number('border', -1, undefined, groupId),
    borderTop: number('borderTop', -1, undefined, groupId),
    borderBottom: number('borderBottom', -1, undefined, groupId),
    borderLeft: number('borderLeft', -1, undefined, groupId),
    borderRight: number('borderRight', -1, undefined, groupId),
    borderRadius: select('borderRadius', radiusOptions, undefined, groupId),
    borderTopRadius: select('borderTopRadius', radiusOptions, undefined, groupId),
    borderBottomRadius: select('borderBottomRadius', radiusOptions, undefined, groupId),
    borderLeftRadius: select('borderLeftRadius', radiusOptions, undefined, groupId),
    borderRightRadius: select('borderRightRadius', radiusOptions, undefined, groupId),
    borderWidth: number('borderWidth', 0, undefined, groupId),
    borderColor: select('borderColor', colorOptions, 'success', groupId),
  };
};

export const boxShadowProps = () => {
  return {
    boxShadow: number('boxShadow', -1, undefined, groupId),
    elevation: number('elevation', 0, undefined, groupId),
  };
};

export const boxSpacingProps = () => {
  return {
    padding: radios('padding', spacingOptions, undefined, groupId),
    paddingTop: radios('paddingTop', spacingOptions, undefined, groupId),
    paddingBottom: radios('paddingBottom', spacingOptions, undefined, groupId),
    paddingLeft: radios('paddingLeft', spacingOptions, undefined, groupId),
    paddingRight: radios('paddingRight', spacingOptions, undefined, groupId),
    paddingX: radios('paddingX', spacingOptions, undefined, groupId),
    paddingY: radios('paddingY', spacingOptions, undefined, groupId),
    margin: radios('margin', spacingOptions, undefined, groupId),
    marginTop: radios('marginTop', spacingOptions, undefined, groupId),
    marginBottom: radios('marginBottom', spacingOptions, undefined, groupId),
    marginLeft: radios('marginLeft', spacingOptions, undefined, groupId),
    marginRight: radios('marginRight', spacingOptions, undefined, groupId),
    marginX: radios('marginX', spacingOptions, undefined, groupId),
    marginY: radios('marginY', spacingOptions, undefined, groupId),
  };
};

export const boxProps = () => {
  return {
    ...boxFlexboxProps(),
    ...boxDisplayProps(),
    ...boxBackgroundProps(),
    ...boxBorderProps(),
    ...boxShadowProps(),
    ...boxSpacingProps(),
  };
};

storiesOf('Box', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/box/Basic')} {...boxProps()} />
    </>
  ));
// .add('with customize', () => (
//   <>
//     <UseCase title="Customize" usage="The customize component (TextInput)">
//       <Box<TextInputProps> Component={TextInput} {...boxProps()} />
//     </UseCase>
//   </>
// ));
