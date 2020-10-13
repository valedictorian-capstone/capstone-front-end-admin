import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './department-detail.component.css';

export interface IDepartmentDetailComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const DepartmentDetailComponent: React.FC<IDepartmentDetailComponentProps> = (props: IDepartmentDetailComponentProps) => {
  return <></>;
};