import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-col.component.css';

export interface ITableColComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    column: {
      name: string,
      label: string,
      width: string | number,
      type: 'normal' | 'status',
      search: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' } | string[],
    },
    index: number,
    rowHeight: string | number,
  };
  output: {};
}

export const TableColComponent: <T extends { [key: string]: any }>(props: ITableColComponentProps<T>) => JSX.Element = ({
  input = {
    column: {
      label: '',
      name: '',
      search: { regex: 'contains', value: '', sort: 'desc' },
      type: 'normal',
      width: '4rem',
    },
    index: 0,
  },
}) => {
  return (
    <div className="col-item" key={input.index} style={{ width: input.column.width, height: input.rowHeight, borderRight: '1px solid gray' }}>
      <div className="col-item-cell">
        <span>{input.column.label}</span>
      </div>
    </div>
  );
};