import { PlusCircleOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { RoleVM } from '@view-models';
import { Button, Col, Input, Popover, Row } from 'antd';
import React from 'react';
import './role-support.component.css';

export interface IRoleSupportComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | '',
    rows: RoleVM[],
  };
  output: {
    onCreate: () => void,
    onSearch: (rows: RoleVM[]) => void,
  };
}

export const RoleSupportComponent: React.FC<IRoleSupportComponentProps> = (props: IRoleSupportComponentProps) => {
  const [value, setValue] = React.useState<string>('');
  React.useEffect(() => {
    setValue('');
  }, [props.input.action, props.input.rows]);

  React.useEffect(() => {
    if (value === '') {
      props.output.onSearch(props.input.rows.filter((row) => (
        row.name.toLowerCase().includes(value.toLowerCase())
      )));
      console.log(props.input.rows.filter((row) => (
        row.name.toLowerCase().includes(value.toLowerCase())
      )));
    } else {
      const debounce = setTimeout(() => {
        props.output.onSearch(props.input.rows.filter((row) => (
          row.name.toLowerCase().includes(value.toLowerCase())
        )));
      }, 750);
      return () => clearTimeout(debounce);
    }
  }, [value]);
  return (
    <div className="role-support">
      <Row>
        <Col xs={10} sm={10} md={12} lg={12} xl={16} xxl={16} className="role-support-left">
          <div>
            <Button disabled={props.input.action !== ''} style={{ background: '#28a745', color: 'white', marginRight: 5 }} shape="circle" size="small" className="setting" icon={<PlusCircleOutlined />} onClick={props.output.onCreate} />
            <Button disabled={props.input.action !== ''} size="small" shape="circle" className="setting search" style={{ marginRight: 5 }} type="primary" icon={<SearchOutlined />} />
          </div>
        </Col>
        <Col xs={14} sm={14} md={12} lg={12} xl={8} xxl={8} className="role-support-right">
          <div>
            <Input onChange={(e) => {
              setValue(e.target.value);
            }} disabled={props.input.action !== ''} placeholder="Fill anything to search..." suffix={<SearchOutlined />} width="100%" style={{ borderRadius: 10 }} />
          </div>
        </Col>
      </Row>
    </div >
  );
};