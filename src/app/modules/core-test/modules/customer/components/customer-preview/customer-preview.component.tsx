import { FormControlSettingComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { ExtraInformationVM } from '@view-models';
import { Row } from 'antd';
import React from 'react';
import './customer-preview.component.css';

export interface ICustomerPreviewComponentProps extends IBaseProps {
  input: {
    extraInformations: ExtraInformationVM[],
  };
  output: {};
}

export const CustomerPreviewComponent: React.FC<ICustomerPreviewComponentProps> = (props: ICustomerPreviewComponentProps) => {
  const [extraInformations, setCustomerExtraInformations] = React.useState<ExtraInformationVM[]>(props.input.extraInformations.sort((a, b) => a.position - b.position));
  React.useEffect(() => {
    setCustomerExtraInformations(props.input.extraInformations);
  }, [props.input.extraInformations]);
  return (
    <div className="ant-form ant-form-horizontal customer-preview" style={{ width: '100%', height: '100%' }}>
      <Row style={{ width: '100%', height: '100%', alignContent: 'baseline', maxHeight: '100%', overflow: 'auto' }}>
        {extraInformations.filter((item) => !item.isDelete).map((item, index) => (
          <FormControlSettingComponent key={item.id + '-preview'} input={{ index, item, isPreview: true, active: -1 }} output={{}} />
        ))}
      </Row>
    </div>
  );
};