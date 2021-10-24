import React, { useRef } from 'react';
import { SectionList, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Button, Card, Divider, Text, GridSectionList } from '@shuttle-ui/components';

import { UseCase } from '../views';

const sections = Array(1000)
  .fill('')
  .map((_, i) => ({
    data: Array(4)
      .fill('')
      .flatMap(() => [
        {
          row: 1,
          col: 1,
        },
        {
          row: 1,
          col: 2,
        },
        {
          row: 1,
          col: 1,
        },
        {
          row: 2,
          col: 2,
        },
        {
          row: 1,
          col: 1,
        },
      ]),
    title: `${i}-0`,
  }));

const VerticalList = () => {
  const ref = useRef<SectionList>(null);
  return (
    <>
      <Button
        onPress={() => {
          if (ref.current) {
            ref.current.scrollToLocation({ sectionIndex: 200, itemIndex: 0 });
          }
        }}
      >
        JUMP TO SECTION INDEX 200
      </Button>
      <GridSectionList
        // @ts-ignore
        forwardedRef={ref}
        sections={sections}
        row={3}
        col={3}
        spacing={10}
        renderItem={({ index, sectionIndex }) => (
          <Card>
            <Card.Title>
              Title {sectionIndex}-{index}
            </Card.Title>
            <Divider color="#e0e0e0" />
            <Card.Content flex={1}>
              <Text>No Bug</Text>
            </Card.Content>
            <Card.Content>
              <Button>VIEW NOW</Button>
            </Card.Content>
          </Card>
        )}
        renderSectionHeader={({ section }) => {
          return (
            <Text bgColor="red" lineHeight={30} align="center" center>
              {section.title}
            </Text>
          );
        }}
        renderSectionFooter={({ section }) => {
          return (
            <Text bgColor="red" lineHeight={30} align="center" center>
              {section.title}
            </Text>
          );
        }}
        getSectionHeaderLayout={() => ({ length: 30 })}
        getSectionFooterLayout={() => ({ length: 30 })}
        getItemLayout={(_, index) => _[index]}
        style={{ height: 600 }}
        stickySectionHeadersEnabled
      />
    </>
  );
};

const HorizontalList = () => {
  return (
    <GridSectionList
      sections={sections}
      row={3}
      col={3}
      spacing={10}
      renderItem={({ index, sectionIndex }) => (
        <Card>
          <Card.Title>
            Title {sectionIndex}-{index}
          </Card.Title>
          <Divider color="#e0e0e0" />
          <Card.Content flex={1}>
            <Text>No Bug</Text>
          </Card.Content>
          <Card.Content>
            <Button>VIEW NOW</Button>
          </Card.Content>
        </Card>
      )}
      renderSectionHeader={({ section }) => {
        return (
          <Text bgColor="red" width={30} align="center" center>
            {section.title}
          </Text>
        );
      }}
      renderSectionFooter={({ section }) => {
        return (
          <Text bgColor="red" width={30} align="center" center>
            {section.title}
          </Text>
        );
      }}
      getSectionHeaderLayout={() => ({ length: 30 })}
      getSectionFooterLayout={() => ({ length: 30 })}
      getItemLayout={(_, index) => _[index]}
      style={{ height: 600 }}
      stickySectionHeadersEnabled
      horizontal
    />
  );
};

storiesOf('GridSectionList', module)
  .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
  .add('vertical list', () => (
    <UseCase title="Vertical" usage="The vertical list">
      <VerticalList />
    </UseCase>
  ))
  .add('horizontal list', () => (
    <UseCase title="Horizontal" usage="The horizontal list">
      <HorizontalList />
    </UseCase>
  ));
