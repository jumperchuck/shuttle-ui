import React, { useRef } from 'react';
import { SectionList } from 'react-native';
import { Text, GridSectionList, Card, Divider, Button } from '@shuttle-ui/components';

export const Title = 'Basic';

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

export const Example = () => {
  const ref = useRef(null);
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
        style={{ width: '100%', height: 600 }}
        stickySectionHeadersEnabled
      />
    </>
  );
};
