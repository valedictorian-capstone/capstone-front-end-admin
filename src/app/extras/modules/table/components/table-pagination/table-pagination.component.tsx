import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-pagination.component.css';

export interface ITablePaginationComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {};
  output: {};
}

export const TablePaginationComponent: <T extends { [key: string]: any }>(props: ITablePaginationComponentProps<T>) => JSX.Element = (props) => {
  return <></>;
};