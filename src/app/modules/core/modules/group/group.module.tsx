import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { GroupRoutes } from './group.routing';

export interface IGroupModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const GroupModule: React.FC<IGroupModuleProps> = (props: IGroupModuleProps) => {
  return (
    <GroupRoutes fatherProps={props} input={{}} output={{}} />
  );
};