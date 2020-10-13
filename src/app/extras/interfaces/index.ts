import React, { CSSProperties } from 'react';
import { RouteChildrenProps, RouteProps } from 'react-router-dom';
export interface IBaseProps extends RouteProps {
  children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  styles?: CSSProperties;
  className?: string;
  id?: string;
  fatherProps?: IBaseProps;
  ref?: React.Ref<any>;
}