import GridSectionList, { GridSectionListProps } from './GridSectionList';
import LayoutManager from './LayoutManager';

export default Object.assign(GridSectionList, {
  LayoutManager: LayoutManager,
});

export type { GridSectionListProps };

export * from './types';
