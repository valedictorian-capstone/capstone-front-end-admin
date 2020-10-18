import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { ExtraInformationCM, ExtraInformationUM } from '@view-models';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { CustomerItemComponent } from '..';
import './customer-helper.component.css';

export interface ICustomerHelperComponentProps extends IBaseProps {
  input: {
    horizontal?: boolean,
  };
  output: {};
}

export const CustomerHelperComponent: React.FC<ICustomerHelperComponentProps> = (props: ICustomerHelperComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.customer.components['customer-palette'][region];
  return (
    <div className={'customer-helper-container' + (props.input.horizontal ? ' horizontal' : '')}>
      <div className={'customer-helper-content' + (props.input.horizontal ? ' horizontal' : '')}>
        {config.items.map((item, index) => <CustomerItemComponent key={uuid()} output={{}} input={{ item: { ...item, id: uuid() } as ExtraInformationUM | ExtraInformationCM, index, disabled: true }} />)}
      </div>
    </div>
  );
};