import React from 'react';
import { ScrollView, ScrollViewProps, View } from 'react-native';

export interface StoryScreen extends ScrollViewProps {
  noScroll?: boolean;
}

const StoryScreen: React.FC<StoryScreen> = (props) => {
  const { noScroll, children, ...reset } = props;
  if (noScroll) {
    return (
      <View style={{ flex: 1 }} {...reset}>
        {children}
      </View>
    );
  }
  return (
    <ScrollView style={{ flex: 1 }} {...reset}>
      {children}
    </ScrollView>
  );
};

export default StoryScreen;
