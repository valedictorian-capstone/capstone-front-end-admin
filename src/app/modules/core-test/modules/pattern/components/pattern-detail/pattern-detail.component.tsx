import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import { FormControlComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { usePatternAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { PatternUM, PatternVM } from '@view-models';
import { Button, Col, Form, Input, Radio, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import './pattern-detail.component.css';
export interface IPatternDetailComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | '',
    row: PatternVM | undefined,
  };
  output: {
    onDone: () => void,
  };
}

export const PatternDetailComponent: React.FC<IPatternDetailComponentProps> = (props: IPatternDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [form] = Form.useForm<PatternUM>();
  const dispatch = useDispatch();
  React.useEffect(() => {
    form.setFieldsValue({
      name: props.input.row ? props.input.row.name : '',
      description: props.input.row ? props.input.row.description : '',
    });
  }, [props.input.action]);
  return (
    <div id={props.input.row?.id} key="new-pattern" className="pattern-item selected" style={{ display: props.input.action === 'edit' && props.input.row ? 'block' : 'none' }}>
      <div className="pattern-item-header">
        <Row className="pattern-item-header-content">
          <Col span={0} className="pattern-item-header-content-left" />
          <Col span={24} className="pattern-item-header-content-right" style={{ height: '100%', justifyContent: 'center' }}>
            <span>New Pattern</span>
          </Col>
        </Row>
      </div>
      <div className="pattern-item-content">
        <div className="tab-view">
          <div className="pattern-detail" style={{ display: 'flex' }}>
            <div className="content">
              <Form id="new-control" form={form} name="control-ref">
                <Row style={{ width: '100%', height: '100%', alignContent: 'baseline', maxHeight: '100%', overflow: 'auto' }}>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Name</label>
                      <Form.Item name="name" rules={[{ required: true, message: 'Name can not be blank' }]}>
                        <Input />
                      </Form.Item>
                      <div className="form-control">
                        <label>Description</label>
                        <Form.Item name="description">
                          <Input.TextArea rows={5} />
                        </Form.Item>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="pattern-item-footer" >
        <Row className="pattern-item-footer-content">
          <Col span={8} className="pattern-item-footer-content-left" />
          <Col span={8} className="pattern-item-footer-content-middle">
            <div className="pattern-item-footer-content-middle-buttons">
              <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                setSubmit('processing');
                form.isFieldsTouched(true);
                form.validateFields().then(() => {
                  setTimeout(() => {
                    dispatch(usePatternAction().update({ ...props.input.row, ...form.getFieldsValue() },
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
          <Col xs={8} sm={8} md={0} className="pattern-item-footer-content-right" />
          <Col xs={0} sm={0} md={8} className="pattern-item-footer-content-right" />
        </Row>
      </div>
    </div>
  );
};