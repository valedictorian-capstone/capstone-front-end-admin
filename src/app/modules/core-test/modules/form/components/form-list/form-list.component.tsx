import { CheckCircleOutlined, CheckOutlined, EditOutlined, EyeOutlined, InfoCircleOutlined, MinusCircleOutlined, MinusOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Popover, Row, Tag } from 'antd';
import { TabView, TabPanel } from 'primereact/tabview';
import { IBaseProps } from '@extras/interfaces';
import { FormGroupCM, FormGroupVM } from '@view-models';
import React from 'react';
import { FormDetailComponent, FormEditableComponent, FormPreviewComponent } from '..';
import './form-list.component.css';
import { FloatLabelComponent } from '@extras/components';
export interface IFormListComponentProps extends IBaseProps {
  input: {
    rows: FormGroupVM[],
  };
  output: {
    onSelect: (row: FormGroupVM | undefined) => void,
  };
}

export const FormListComponent: React.FC<IFormListComponentProps> = (props: IFormListComponentProps) => {
  const [selected, setSelected] = React.useState<FormGroupVM | undefined>(undefined);
  const edit = (row: FormGroupVM | undefined) => {
    setSelected(row);
    props.output.onSelect(row);
  };
  return (
    <div className="form-list" style={{ overflow: selected ? 'hidden' : 'auto' }}>
      {props.input.rows.map((row) => (
        <div id={row.id} key={row.id} className="form-item" style={{ display: !selected ? 'block' : 'none' }}>
          <div className="form-item-header">
            <Row className="form-item-header-content">
              <Col span={12} className="form-item-header-content-left">
                <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
                  <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{row.code}</b></span>
                  <span style={{ float: 'right' }}>
                    <Popover placement="bottomRight" trigger="hover" content={
                      <>
                        <table style={{ border: '1px solid gray' }}>
                          <tbody>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th colSpan={2} style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Form Information</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Code</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.code}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Name</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.name}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Status</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}><Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag></th>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    }>
                      <InfoCircleOutlined />
                    </Popover>
                  </span>
                </Tag>
              </Col>
              <Col span={12} className="form-item-header-content-right">
                <Button size="small" shape="circle" className="setting" style={{ marginRight: 5 }} type="primary" icon={<EyeOutlined />} />
                <Button size="small" shape="circle" className="setting" danger={!row.isDelete} style={{ marginRight: 5 }} icon={row.isDelete ? <CheckCircleOutlined /> : <MinusCircleOutlined />} />
                <Button size="small" shape="circle" className="setting" danger={true} type="primary" icon={<RestOutlined />} />
              </Col>
            </Row>
          </div>
          <div className="form-item-content" />
          <div className="form-item-footer" >
            <Row className="form-item-footer-content">
              <Col span={8} className="form-item-footer-content-left" />
              <Col span={8} className="form-item-footer-content-middle" />
              <Col xs={8} sm={8} md={0} className="form-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
              <Col xs={0} sm={0} md={8} className="form-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
            </Row>
          </div>
          <div className="form-item-edit">
            <Button size="large" shape="circle" icon={<EditOutlined />} className="setting" onClick={() => edit(row)} />
          </div>
        </div>
      ))
      }
      <FormDetailComponent input={{ row: selected }} output={{
        onDone: () => {
          edit(undefined);
        },
      }} />
    </div>
  );
};