import React, { useState } from 'react';
import { TabView, Text } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
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
  );
};
