import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-row.component.css';
import { TableColComponent } from '..';

export interface ITableRowComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    row: T,
    rowHeight: string | number,
    columns: Array<{
      name: string,
      label: string,
      width: string | number,
      type: 'normal' | 'status',
      search: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' } | string[],
    }>,
  };
  output: {
  };
}

export const  TableRowComponent: <T extends { [key: string]: any }>(props: ITableRowComponentProps<T>) => JSX.Element = ({
  input = {
    row: {} as any,
    columns: [],
    rowHeight: '4rem',
  },
  output,
}) => {
  return (
    <div className="row" style={{ height: input.rowHeight }}>
      {(input.columns as Array<{
        name: string,
        label: string,
        width: string | number,
        type: 'normal' | 'status',
        search: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' } | string[],
      }>).map((column, i) => (
        <TableColComponent key={i} input={{ column: {...column, label: input.row[column.name]}, index: i, rowHeight: input.rowHeight }} output={{}} />
      ))}
    </div>
  );
};