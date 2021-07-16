import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

export interface UseCaseProps {
  title: string;
  usage?: string;
  style?: StyleProp<ViewStyle>;
}

const UseCase: React.FC<UseCaseProps> = (props) => {
  const { title, usage, style, children } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.useCaseWrapper}>
          <Text style={styles.useCase}>Use Case</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {usage ? <Text style={styles.usage}>{usage}</Text> : null}
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default UseCase;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  useCaseWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  useCase: {
    fontSize: 10,
    color: '#666',
    paddingHorizontal: 4,
    paddingBottom: 2,
  },
  titleWrapper: {},
  title: {
    fontWeight: '600',
    color: '#3d3d3d',
  },
  usage: {
    color: '#666',
    fontSize: 10,
    paddingTop: 0,
  },
  content: {
    backgroundColor: '#fff',
    padding: 10,
  },
});
