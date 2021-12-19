import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { array, boolean, object, radios, select } from '@storybook/addon-knobs';
import { Button, IconProps } from '@shuttle-ui/components';

import * as Basic from '../../../demo/button/Basic';
import { StoryScreen, UseCase } from '../views';
import { colorOptions } from './knbos';
import { spaceProps } from './Space.stories';

export const buttonProps = () => {
  const groupId = 'button';
  return {
    type: select(
      'type',
      {
        solid: 'solid',
        text: 'text',
        outline: 'outline',
      },
      'solid',
      groupId,
    ),
    color: radios('color', colorOptions, 'primary', groupId),
    textStyle: object('textStyle', {}, groupId),
    disabled: boolean('disabled', false, groupId),
    disabledStyle: object('disabledStyle', {}, groupId),
    disabledTextStyle: object('disabledTextStyle', {}, groupId),
    loading: boolean('loading', false, groupId),
    onPress: action('button clicked'),
    icon: object(
      'icon',
      {
        type: 'entypo',
        name: 'app-store',
      },
      groupId,
    ) as IconProps,
  };
};

export const buttonGroupProps = () => {
  const groupId = 'buttonGroup';
  return {
    selectedKeys: array('selectedKeys', ['1'], undefined, groupId),
    selectedProps: object('selectedProps', {}, groupId),
    buttonProps: object('buttonProps', {}, groupId),
    onChange: action('button group changed'),
    onPress: action('button group clicked'),
  };
};

storiesOf('Button', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('with basic', () => (
    <>
      <UseCase demo={require('../../../demo/button/Basic')} {...buttonProps()} />
    </>
  ))
  .add('with group', () => (
    <>
      <UseCase demo={require('../../../demo/button/Group')} {...buttonGroupProps()} />
    </>
  ));
