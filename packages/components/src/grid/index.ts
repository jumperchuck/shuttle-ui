import Grid, { GridProps } from './Grid';
import GridCol, { GridColProps } from './GridCol';
import GridRow, { GridRowProps } from './GridRow';
import { useGridContext, GridContextType } from './context';

export default Object.assign(Grid, {
  Col: GridCol,
  Row: GridRow,
  useGridContext,
});

export type { GridProps, GridColProps, GridRowProps, GridContextType };
