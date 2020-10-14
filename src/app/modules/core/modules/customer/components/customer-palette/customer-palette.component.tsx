import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { CustomerExtraInformationCM } from '@view-models';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { CustomerItemComponent } from '..';
import './customer-palette.component.css';

export interface ICustomerPaletteComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const CustomerPaletteComponent: React.FC<ICustomerPaletteComponentProps> = (props: ICustomerPaletteComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.customer.components['customer-palette'][region];
  return (
    <div style={{width: '80%', margin: 'auto'}}>
      {/* {config.items.map((item, index) => <CustomerItemComponent key={uuid()} output={{}} input={{ item: { ...item, id: uuid(), position: 0, isDelete: false } as CustomerExtraInformationCM, index, disabled: true, isNew: true }} />)} */}
    </div>
  );
};