import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-footer.component.css';

export interface ITableFooterComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {};
  output: {};
}

export const TableFooterComponent: <T extends { [key: string]: any }>(props: ITableFooterComponentProps<T>) => JSX.Element = (props) => {
  return <></>;
};