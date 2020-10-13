import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-header.component.css';

export interface ITableHeaderComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {};
  output: {};
}

export const TableHeaderComponent: <T extends { [key: string]: any }>(props: ITableHeaderComponentProps<T>) => JSX.Element = (props) => {
  return <></>;
};