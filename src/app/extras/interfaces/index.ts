import React, { CSSProperties } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
export interface IBaseProps {
  children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  styles?: CSSProperties;
  className?: string;
  id?: string;
}