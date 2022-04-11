import Collapse, { CollapseProps } from './Collapse';
import CollapseHeader, { CollapseHeaderProps } from './CollapseHeader';
import CollapseContent, { CollapseContentProps } from './CollapseContent';
import CollapseArrow, { CollapseArrowProps } from './CollapseArrow';
import CollapseGroup, { CollapseGroupProps } from './CollapseGroup';
import { useCollapseContext, CollapseContextType } from './context';

export default Object.assign(Collapse, {
  Group: CollapseGroup,
  Header: CollapseHeader,
  Content: CollapseContent,
  Arrow: CollapseArrow,
  useCollapseContext,
});

export type {
  CollapseProps,
  CollapseGroupProps,
  CollapseHeaderProps,
  CollapseContentProps,
  CollapseArrowProps,
  CollapseContextType,
};
