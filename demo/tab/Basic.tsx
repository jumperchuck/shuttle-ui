import React, { useState } from 'react';
import { TabBar, TabView, Text } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <>
      <TabBar tabIndex={tabIndex} onChange={setTabIndex}>
        <TabBar.Item>Tab 1</TabBar.Item>
        <TabBar.Item>Tab 2</TabBar.Item>
        <TabBar.Item>Tab 3</TabBar.Item>
        <TabBar.Item>Tab 4</TabBar.Item>
      </TabBar>
      <TabView height={200} tabIndex={tabIndex} onChange={setTabIndex}>
        <TabView.Item>
          <Text>1</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>2</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>3</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>4</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
