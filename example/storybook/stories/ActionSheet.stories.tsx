import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { StoryScreen, UseCase } from '../views';
import { ScrollView, Text, View } from 'react-native';
import { Button, TabBar } from '@shuttle-ui/components';

storiesOf('ActionSheet', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('usage', () => (
    <>
      <UseCase demo={require('../../../demo/actionSheet/Basic')} />
      <UseCase title="test">
        <ScrollView horizontal>
          <View
            style={{
              width: 80,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: 80,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>2</Text>
          </View>
          <View
            style={{
              width: 80,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>3</Text>
          </View>
          <View
            style={{
              width: 80,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>4</Text>
          </View>
          <View
            style={{
              width: 80,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>5</Text>
          </View>
          <Button
            style={{
              width: 80,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onLayout={(e) => console.log(e.nativeEvent)}
          >
            <Text>6</Text>
          </Button>
        </ScrollView>

        <TabBar>
          <TabBar.Item>1</TabBar.Item>
          <TabBar.Item>2</TabBar.Item>
          <TabBar.Item>3</TabBar.Item>
          <TabBar.Item>4</TabBar.Item>
          <TabBar.Item>5</TabBar.Item>
          <TabBar.Item>6</TabBar.Item>
          <TabBar.Item>7</TabBar.Item>
          <TabBar.Item>8</TabBar.Item>
          <TabBar.Item>9</TabBar.Item>
          <TabBar.Item>10</TabBar.Item>
          <TabBar.Item>11</TabBar.Item>
          <TabBar.Item>12</TabBar.Item>
          <TabBar.Item>13</TabBar.Item>
        </TabBar>
      </UseCase>
    </>
  ));
