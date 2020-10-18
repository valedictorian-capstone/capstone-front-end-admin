import { PlusCircleOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { ProductVM } from '@view-models';
import { Button, Col, Input, Popover, Row } from 'antd';
import React from 'react';
import { ProductHelperComponent } from '..';
import './product-support.component.css';

export interface IProductSupportComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | 'setting' | '',
    rows: ProductVM[],
  };
  output: {
    onCreate: () => void,
    onSearch: (rows: ProductVM[]) => void,
    onSetting: () => void,
  };
}

export const ProductSupportComponent: React.FC<IProductSupportComponentProps> = (props: IProductSupportComponentProps) => {
  const [value, setValue] = React.useState<string>('');
  React.useEffect(() => {
    setValue('');
  }, [props.input.action, props.input.rows]);

  React.useEffect(() => {
    if (value === '') {
      props.output.onSearch(props.input.rows.filter((row) => (
        row.code.toLowerCase().includes(value.toLowerCase()) ||
        row.name.toLowerCase().includes(value.toLowerCase()) ||
        row.brand.toLowerCase().includes(value.toLowerCase())
      )));
    } else {
      const debounce = setTimeout(() => {
        props.output.onSearch(props.input.rows.filter((row) => (
          row.code.toLowerCase().includes(value.toLowerCase()) ||
          row.name.toLowerCase().includes(value.toLowerCase()) ||
          row.brand.toLowerCase().includes(value.toLowerCase())
        )));
      }, 750);
      return () => clearTimeout(debounce);
    }
  }, [value]);
  return (
    <div className="product-support">
      <Row>
        <Col xs={10} sm={10} md={12} lg={12} xl={16} xxl={16} className="product-support-left">
          <div>
            {props.input.action !== 'setting' && <Button disabled={props.input.action !== ''} style={{ background: '#28a745', color: 'white', marginRight: 5 }} shape="circle" size="small" className="setting" icon={<PlusCircleOutlined />} onClick={props.output.onCreate} />}
            {props.input.action !== 'setting' && <Button disabled={props.input.action !== ''} size="small" shape="circle" className="setting search" style={{ marginRight: 5 }} type="primary" icon={<SearchOutlined />} />}
            {props.input.action === 'setting' && <Popover id="rop-test" placement="topLeft" trigger="click" content={<ProductHelperComponent input={{ horizontal: true }} output={{}} />}>
              <Button size="small" shape="circle" className="setting set" type="primary" icon={<SettingOutlined />} />
            </Popover>}
            {props.input.action !== 'setting' && <Button disabled={props.input.action !== ''} size="small" shape="circle" onClick={props.output.onSetting} className="setting use" type="primary" icon={<SettingOutlined />} />}
          </div>
        </Col>
        <Col xs={14} sm={14} md={12} lg={12} xl={8} xxl={8} className="product-support-right">
          <div>
            {props.input.action !== 'setting' && <Input onChange={(e) => {
              setValue(e.target.value);
            }} disabled={props.input.action !== ''} placeholder="Fill anything to search..." suffix={<SearchOutlined />} width="100%" style={{ borderRadius: 10 }} />}
          </div>
        </Col>
      </Row>
    </div >
  );
};