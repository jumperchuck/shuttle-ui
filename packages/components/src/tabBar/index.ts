import TabBar, { TabBarProps } from './TabBar';
import TabBarItem, { TabBarItemProps } from './TabBarItem';

export default Object.assign(TabBar, {
  Item: TabBarItem,
});

export type { TabBarProps, TabBarItemProps };
