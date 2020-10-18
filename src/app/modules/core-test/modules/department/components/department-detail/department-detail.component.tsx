import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import { FormControlComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { useDepartmentAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { DepartmentUM, DepartmentVM } from '@view-models';
import { Button, Col, Form, Input, Radio, Row, Select } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import './department-detail.component.css';
export interface IDepartmentDetailComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | '',
    row: DepartmentVM | undefined,
    rows: DepartmentVM[],
  };
  output: {
    onDone: () => void,
  };
}

export const DepartmentDetailComponent: React.FC<IDepartmentDetailComponentProps> = (props: IDepartmentDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [form] = Form.useForm<DepartmentUM>();
  const dispatch = useDispatch();
  React.useEffect(() => {
    form.setFieldsValue({
      name: props.input.row ? props.input.row.name : '',
      description: props.input.row ? props.input.row.description : '',
      departmentParent: props.input.row ? (props.input.row.departmentParent as DepartmentVM).id : undefined,
    });
  }, [props.input.action]);
  return (
    <div id={props.input.row?.id} key="new-department" className="department-item selected" style={{ display: props.input.action === 'edit' && props.input.row ? 'block' : 'none' }}>
      <div className="department-item-header">
        <Row className="department-item-header-content">
          <Col span={0} className="department-item-header-content-left" />
          <Col span={24} className="department-item-header-content-right" style={{ height: '100%', justifyContent: 'center' }}>
            <span>New Department</span>
          </Col>
        </Row>
      </div>
      <div className="department-item-content">
        <div className="tab-view">
          <div className="department-detail" style={{ display: 'flex' }}>
            <div className="content">
              <Form id="new-control" form={form} name="control-ref">
                <Row style={{ width: '100%', height: '100%', alignContent: 'baseline', maxHeight: '100%', overflow: 'auto' }}>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Name</label>
                      <Form.Item name="name" rules={[{ required: true, message: 'Name can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Department Higher</label>
                      <Form.Item name="departmentParent">
                        <Select
                          showSearch={true}
                          allowClear={true}
                          placeholder="Select Department"
                          style={{ width: '100%', background: 'white' }}
                          optionFilterProp="children"
                          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                        >
                          {props.input.rows.map((row, index) => (
                            <Select.Option key={index + '-' + row.id} value={row.id}>{row.name}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Description</label>
                      <Form.Item name="description">
                        <Input.TextArea rows={5} />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="department-item-footer" >
        <Row className="department-item-footer-content">
          <Col span={8} className="department-item-footer-content-left" />
          <Col span={8} className="department-item-footer-content-middle">
            <div className="department-item-footer-content-middle-buttons">
              <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                setSubmit('processing');
                form.isFieldsTouched(true);
                form.validateFields().then(() => {
                  setTimeout(() => {
                    dispatch(useDepartmentAction().update({ ...props.input.row, ...form.getFieldsValue(), departmentParent: { id: form.getFieldsValue().departmentParent } },
                      () => {
                        swal.fire('Notification', 'Updated successfully', 'success');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Updated failed', 'error');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                    ));
                  }, 1000);
                });
              }} disabled={submit === 'processing'} loading={submit === 'processing'} className="setting" />
              <Button size="middle" shape="circle" icon={<MinusOutlined />} danger={true} className="setting" disabled={submit === 'processing'} onClick={props.output.onDone} />
            </div>
          </Col>
          <Col xs={8} sm={8} md={0} className="department-item-footer-content-right" />
          <Col xs={0} sm={0} md={8} className="department-item-footer-content-right" />
        </Row>
      </div>
    </div>
  );
};