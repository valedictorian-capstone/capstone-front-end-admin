import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { FormControlComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { useCustomerAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { ExtraInformationVM, CustomerUM, CustomerVM } from '@view-models';
import { Button, Col, Form, Input, Radio, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import './customer-detail.component.css';
import moment from 'moment';
export interface ICustomerDetailComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | 'setting' | '',
    row: CustomerVM | undefined,
    extraInformations: ExtraInformationVM[],
  };
  output: {
    onDone: () => void,
  };
}

export const CustomerDetailComponent: React.FC<ICustomerDetailComponentProps> = (props: ICustomerDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.customer.components['customer-create'][region];
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [form] = Form.useForm<CustomerUM>();
  const fields = ['code', 'id', 'address', 'email', 'fullname', 'phone', 'gender', 'avatar'];
  const dispatch = useDispatch();
  React.useEffect(() => {
    const data: any = {};
    for (const extra of props.input.extraInformations) {
        if (!extra.isDelete) {
          const valueExtra = props.input.row?.customerExtraInformationDatas.find((customerExtraInformationData) => customerExtraInformationData.extraInformation.id === extra.id);
          let value: any = '';
          if (valueExtra) {
            switch (valueExtra.extraInformation.type) {
              case 'date-picker':
                value = moment(valueExtra.value, 'YYYY-MM-DD');
                break;
              // case 'date-range':
              case 'time-picker':
                value = moment(valueExtra.value, 'HH:mm:ss');
                break;
              default:
                value = valueExtra.value;
                break;
            }
          }
          data[extra.name + '-<hr>-' + extra.id] = value;
        }
    }
    console.log(data);
    form.setFieldsValue({
      code: props.input.row ? props.input.row.code : '',
      address: props.input.row ? props.input.row.address : '',
      email: props.input.row ? props.input.row.email : '',
      fullname: props.input.row ? props.input.row.fullname : '',
      phone: props.input.row ? props.input.row.phone : '',
      gender: props.input.row ? props.input.row.gender : false,
      avatar: props.input.row ? props.input.row.avatar : '',
      ...data,
    });
  }, [props.input.action, props.input.extraInformations]);
  return (
    <div id={props.input.row?.id} key="new-customer" className="customer-item selected" style={{ display: props.input.action === 'edit' && props.input.row ? 'block' : 'none' }}>
      <div className="customer-item-header">
        <Row className="customer-item-header-content">
          <Col span={0} className="customer-item-header-content-left" />
          <Col span={24} className="customer-item-header-content-right" style={{ height: '100%', justifyContent: 'center' }}>
            <span>New Customer</span>
          </Col>
        </Row>
      </div>
      <div className="customer-item-content">
        <div className="tab-view">
          <div className="customer-detail" style={{ display: 'flex' }}>
            <div className="content">
              <Form id="new-control" form={form} name="control-ref">
                <Row style={{ width: '100%', height: '100%', alignContent: 'baseline', maxHeight: '100%', overflow: 'auto' }}>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Code</label>
                      <Form.Item name="code" rules={[{ required: true, message: 'Code can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>FullName</label>
                      <Form.Item name="fullname" rules={[{ required: true, message: 'FullName can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Email</label>
                      <Form.Item name="email" rules={[{ required: true, message: 'Email can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Phone</label>
                      <Form.Item name="phone" rules={[{ required: true, message: 'Phone can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Address</label>
                      <Form.Item name="address" rules={[{ required: true, message: 'Address can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Gender</label>
                      <Form.Item name="gender" rules={[{ required: true, message: 'Gender can not be blank' }]}>
                        <Radio.Group>
                          <Radio value={true}>Male</Radio>
                          <Radio value={false}>Female</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                  </Col>
                  {props.input.extraInformations.filter((item) => !item.isDelete).map((item, index) => (
                    <FormControlComponent key={item.id + '-create'} input={{ index, item, active: -1 }} output={{}} />
                  ))}
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-item-footer" >
        <Row className="customer-item-footer-content">
          <Col span={8} className="customer-item-footer-content-left" />
          <Col span={8} className="customer-item-footer-content-middle">
            <div className="customer-item-footer-content-middle-buttons">
              <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                setSubmit('processing');
                form.isFieldsTouched(true);
                form.validateFields().then(() => {
                  const data = form.getFieldsValue();
                  const customer: CustomerVM | any = {};
                  const customerExtras: { extraInformation: { id: string }, value: any }[] = [];
                  for (const key in data) {
                    if (Object.prototype.hasOwnProperty.call(data, key)) {
                      const value = data[key];
                      if (fields.includes(key)) {
                        customer[key] = value;
                      } else {
                        customerExtras.push({ value, extraInformation: { id: key.split('-<hr>-')[key.split('-<hr>-').length - 1] } });
                      }
                    }
                  }
                  setTimeout(() => {
                    dispatch(useCustomerAction().update({ ...props.input.row, ...customer, customerExtras },
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
          <Col xs={8} sm={8} md={0} className="customer-item-footer-content-right" />
          <Col xs={0} sm={0} md={8} className="customer-item-footer-content-right" />
        </Row>
      </div>
    </div>
  );
};