import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { array, boolean, object, radios, select } from '@storybook/addon-knobs';

import { StoryScreen, UseCase } from '../views';
import { colorOptions } from './knbos';

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
    icon: object('icon', undefined, groupId),
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
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/button/Basic')} {...buttonProps()} />
      <UseCase demo={require('../../../demo/button/Color')} {...buttonProps()} />
      <UseCase demo={require('../../../demo/button/Size')} {...buttonProps()} />
      <UseCase demo={require('../../../demo/button/Loading')} {...buttonProps()} />
      <UseCase demo={require('../../../demo/button/Icon')} {...buttonProps()} />
      <UseCase demo={require('../../../demo/button/Group')} {...buttonGroupProps()} />
    </>
  ));
