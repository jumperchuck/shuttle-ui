import TabView, { TabViewProps } from './TabView';
import TabViewItem, { TabViewItemProps } from './TabViewItem';

export default Object.assign(TabView, {
  Item: TabViewItem,
});

export type { TabViewProps, TabViewItemProps };
