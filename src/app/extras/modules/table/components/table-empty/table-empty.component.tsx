import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-empty.component.css';

export interface ITableEmptyComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {};
  output: {};
}

export const TableEmptyComponent: <T extends { [key: string]: any }>(props: ITableEmptyComponentProps<T>) => JSX.Element = (props) => {
  return <></>;
};