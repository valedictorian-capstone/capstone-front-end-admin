import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './list-item.component.css';

export interface IListItemComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const ListItemComponent: React.FC<IListItemComponentProps> = (props: IListItemComponentProps) => {
  return <></>;
};