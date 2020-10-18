import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { ProductRoutes } from './product.routing';

export interface IProductModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const ProductModule: React.FC<IProductModuleProps> = (props: IProductModuleProps) => {
  return (
    <ProductRoutes input={{}} output={{}} fatherProps={props} />
  );
};