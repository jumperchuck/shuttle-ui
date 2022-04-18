import Table, { TableProps } from './Table';
import TableHeader, { TableHeaderProps } from './TableHeader';
import TableRow, { TableRowProps } from './TableRow';
import TableCell, { TableCellProps } from './TableCell';
import TableFooter, { TableFooterProps } from './TableFooter';

export default Object.assign(Table, {
  Header: TableHeader,
  Row: TableRow,
  Cell: TableCell,
  Footer: TableFooter,
});

export type {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
};
