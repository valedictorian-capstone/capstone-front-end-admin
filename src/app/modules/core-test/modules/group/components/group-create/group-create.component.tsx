import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useGroupAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { ExtraInformationVM, GroupCM } from '@view-models';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import './group-create.component.css';

export interface IGroupCreateComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | '',
  };
  output: {
    onDone: () => void,
  };
}

export const GroupCreateComponent: React.FC<IGroupCreateComponentProps> = (props: IGroupCreateComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [form] = Form.useForm<GroupCM>();
  const dispatch = useDispatch();
  React.useEffect(() => {
    form.setFieldsValue({
      name: '',
      description: '',
    });
  }, [props.input.action]);
  return (
    <div id="new-group" key="new-group" className="group-item selected" style={{ display: props.input.action === 'create' ? 'block' : 'none' }}>
      <div className="group-item-header">
        <Row className="group-item-header-content">
          <Col span={0} className="group-item-header-content-left" />
          <Col span={24} className="group-item-header-content-right" style={{ height: '100%', justifyContent: 'center' }}>
            <span>New Group</span>
          </Col>
        </Row>
      </div>
      <div className="group-item-content">
        <div className="tab-view">
          <div className="group-detail" style={{ display: 'flex' }}>
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
      <div className="group-item-footer" >
        <Row className="group-item-footer-content">
          <Col span={8} className="group-item-footer-content-left" />
          <Col span={8} className="group-item-footer-content-middle">
            <div className="group-item-footer-content-middle-buttons">
              <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                setSubmit('processing');
                form.isFieldsTouched(true);
                form.validateFields().then(() => {
                  setTimeout(() => {
                    dispatch(useGroupAction().create({ ...form.getFieldsValue() },
                      () => {
                        swal.fire('Notification', 'Created successfully', 'success');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Created failed', 'error');
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
          <Col xs={8} sm={8} md={0} className="group-item-footer-content-right" />
          <Col xs={0} sm={0} md={8} className="group-item-footer-content-right" />
        </Row>
      </div>
    </div>
  );
};