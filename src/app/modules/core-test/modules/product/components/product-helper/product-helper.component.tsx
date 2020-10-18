import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { ExtraInformationCM, ExtraInformationUM } from '@view-models';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { ProductItemComponent } from '..';
import './product-helper.component.css';

export interface IProductHelperComponentProps extends IBaseProps {
  input: {
    horizontal?: boolean,
  };
  output: {};
}

export const ProductHelperComponent: React.FC<IProductHelperComponentProps> = (props: IProductHelperComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.product.components['product-palette'][region];
  return (
    <div className={'product-helper-container' + (props.input.horizontal ? ' horizontal' : '')}>
      <div className={'product-helper-content' + (props.input.horizontal ? ' horizontal' : '')}>
        {config.items.map((item, index) => <ProductItemComponent key={uuid()} output={{}} input={{ item: { ...item, id: uuid() } as ExtraInformationUM | ExtraInformationCM, index, disabled: true }} />)}
      </div>
    </div>
  );
};