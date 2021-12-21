import Grid, { GridProps } from './Grid';
import GridCol, { GridColProps } from './GridCol';
import GridRow, { GridRowProps } from './GridRow';

export default Object.assign(Grid, {
  Col: GridCol,
  Row: GridRow,
});

export type { GridProps, GridColProps, GridRowProps };
