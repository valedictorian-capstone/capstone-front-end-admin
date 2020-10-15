import { FormControlSettingComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { CustomerExtraInformationVM } from '@view-models';
import { Row } from 'antd';
import React from 'react';
import './customer-preview.component.css';

export interface ICustomerPreviewComponentProps extends IBaseProps {
  input: {
    customerExtraInformations: CustomerExtraInformationVM[],
  };
  output: {};
}

export const CustomerPreviewComponent: React.FC<ICustomerPreviewComponentProps> = (props: ICustomerPreviewComponentProps) => {
  const [customerExtraInformations, setCustomerExtraInformations] = React.useState<CustomerExtraInformationVM[]>(props.input.customerExtraInformations.sort((a, b) => a.position - b.position));
  React.useEffect(() => {
    setCustomerExtraInformations(props.input.customerExtraInformations);
  }, [props.input.customerExtraInformations]);
  return (
    <div className="ant-form ant-form-horizontal customer-preview" style={{ width: '100%', height: '100%' }}>
      <Row style={{ width: '100%', height: '100%', alignContent: 'baseline', maxHeight: '100%', overflow: 'auto' }}>
        {customerExtraInformations.filter((item) => !item.isDelete).map((item, index) => (
          <FormControlSettingComponent key={item.id + '-preview'} input={{ index, item, isPreview: true, active: -1 }} output={{}} />
        ))}
      </Row>
    </div>
  );
};