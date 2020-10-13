import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { Button, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './customer-option.component.css';
import { RestOutlined } from '@ant-design/icons';

export interface ICustomerOptionComponentProps extends IBaseProps {
  input: {
    option: { value: string, label: string },
  };
  output: {
    save: (option: { value: string, label: string }) => void,
    remove: () => void,
  };
}

export const CustomerOptionComponent: React.FC<ICustomerOptionComponentProps> = (props: ICustomerOptionComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.customer.components['customer-option'][region];
  const [option, setOption] = React.useState<{ value: string, label: string }>(props.input.option);
  return (
    <Input.Group compact={true} onBlur={() => props.output.save(option)}>
      <Input style={{ width: '50%' }} placeholder={config.label} value={option.label} onChange={(ev) => setOption({ ...option, label: ev.target.value })} />
      <Input style={{ width: '50%' }} placeholder={config.value} value={option.value} onChange={(ev) => setOption({ ...option, value: ev.target.value })} addonAfter={<Button onClick={props.output.remove} danger={true} shape="circle" size="small" icon={<RestOutlined />} />} />
    </Input.Group>
  );
};