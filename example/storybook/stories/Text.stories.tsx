import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { Text } from '@shuttle-ui/components';

import { StoryScreen, UseCase } from '../views';
import { colorOptions, fontOptions, fontSizeOptions, fontWeightOptions } from './knbos';
import { boxProps } from './Box.stories';

const groupId = 'text';

export const textProps = () => {
  return {
    color: select('color', colorOptions, 'blue.100', groupId),
    font: select('font', fontOptions, undefined, groupId),
    size: select('size', fontSizeOptions, 'md', groupId),
    weight: select('weight', fontWeightOptions, 'normal', groupId),
    letterSpacing: number('letterSpacing', 0, undefined, groupId),
    lineHeight: number('lineHeight', 0, undefined, groupId),
    align: select(
      'align',
      {
        auto: 'auto',
        left: 'left',
        right: 'right',
        center: 'center',
        justify: 'justify',
      },
      undefined,
      groupId,
    ),
    decorationLine: select(
      'decorationLine',
      {
        none: 'none',
        underline: 'underline',
        'line-through': 'line-through',
        'underline line-through': 'underline line-through',
      },
      undefined,
      groupId,
    ),
    decorationStyle: select(
      'decorationStyle',
      {
        solid: 'solid',
        double: 'double',
        dotted: 'dotted',
        dashed: 'dashed',
      },
      undefined,
      groupId,
    ),
    textShadow: number('textShadow', 0, undefined, groupId),
    uppercase: boolean('uppercase', false, groupId),
    lowercase: boolean('lowercase', false, groupId),
    capitalize: boolean('capitalize', false, groupId),
    h1: boolean('h1', false, groupId),
    h2: boolean('h1', false, groupId),
    h3: boolean('h1', false, groupId),
    h4: boolean('h1', false, groupId),
    h5: boolean('h1', false, groupId),
  };
};

storiesOf('Text', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase title="Basic" usage="The basic text">
        <Text bgColor={{ xs: 'red', }}>
          {text('children', 'content', groupId)}
        </Text>
      </UseCase>
    </>
  ));
