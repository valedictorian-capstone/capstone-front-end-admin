import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-search.component.css';

export interface ITableSearchComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {};
  output: {};
}

export const TableSearchComponent: <T extends { [key: string]: any }>(props: ITableSearchComponentProps<T>) => JSX.Element = (props) => {
  return <></>;
};