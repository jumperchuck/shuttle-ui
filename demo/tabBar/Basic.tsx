import React, { useState } from 'react';
import { TabBar } from '@shuttle-ui/components';

export const Title = 'Basic';

export const Example = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <TabBar tabIndex={tabIndex} onChange={setTabIndex}>
      <TabBar.Item>Tab 1</TabBar.Item>
      <TabBar.Item>Tab 2</TabBar.Item>
      <TabBar.Item>Tab 3</TabBar.Item>
      <TabBar.Item>Tab 4</TabBar.Item>
      <TabBar.Item>Tab 5</TabBar.Item>
      <TabBar.Item>Tab 6</TabBar.Item>
      <TabBar.Item>Tab 7</TabBar.Item>
      <TabBar.Item>Tab 8</TabBar.Item>
      <TabBar.Item>Tab 9</TabBar.Item>
      <TabBar.Item>Tab 10</TabBar.Item>
      <TabBar.Item>Tab 11</TabBar.Item>
    </TabBar>
  );
};
