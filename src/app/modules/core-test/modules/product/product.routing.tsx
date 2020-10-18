import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import { ProductMainComponent } from './pages';

export interface IProductRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const ProductRoutes: React.FC<IProductRoutesProps> = (props: IProductRoutesProps) => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/core/product" component={(routeProps: RouteComponentProps) => <ProductMainComponent {...routeProps} input={{}} output={{}} fatherProps={props} />} />
    </BrowserRouter>
  );
};