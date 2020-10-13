import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-support.component.css';
import { Button, Col, Input, Popover, Row } from 'antd';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { FloatLabelComponent } from '@extras/components';
import { FormHelperComponent } from '..';

export interface IFormSupportComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormSupportComponent: React.FC<IFormSupportComponentProps> = (props: IFormSupportComponentProps) => {
  return (
    <div className="form-support">
      <Row>
        <Col xs={6} sm={6} md={12} lg={12} xl={16} xxl={16} className="form-support-left">
          <div>
            <Button size="small" shape="circle" className="setting" style={{ marginRight: 5 }} type="primary" icon={<SearchOutlined />} />
            <Popover placement="topLeft" trigger="click" content={<FormHelperComponent input={{horizontal: true}} output={{}} />}>
              <Button size="small" shape="circle" className="setting" type="primary" icon={<SettingOutlined />} />
            </Popover>
          </div>
        </Col>
        <Col xs={18} sm={18} md={12} lg={12} xl={8} xxl={8} className="form-support-right">
          <div>
            <Input placeholder="Fill anything to search..." suffix={<SearchOutlined />} width="100%" style={{ borderRadius: 10 }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};