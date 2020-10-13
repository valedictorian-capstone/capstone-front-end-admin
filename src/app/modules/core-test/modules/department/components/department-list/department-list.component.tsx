import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './department-list.component.css';

export interface IDepartmentListComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const DepartmentListComponent: React.FC<IDepartmentListComponentProps> = (props: IDepartmentListComponentProps) => {
  return <></>;
};