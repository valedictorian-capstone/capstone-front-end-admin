import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { FormControlComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { useProductAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { ExtraInformationVM, ProductUM, ProductVM } from '@view-models';
import { Button, Col, Form, Input, Radio, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import './product-detail.component.css';
import moment from 'moment';
export interface IProductDetailComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | 'setting' | '',
    row: ProductVM | undefined,
    extraInformations: ExtraInformationVM[],
  };
  output: {
    onDone: () => void,
  };
}

export const ProductDetailComponent: React.FC<IProductDetailComponentProps> = (props: IProductDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [form] = Form.useForm<ProductUM>();
  const fields = ['code', 'name', 'brand', 'price', 'description'];
  const dispatch = useDispatch();
  React.useEffect(() => {
    const data: any = {};
    for (const extra of props.input.extraInformations) {
      if (!extra.isDelete) {
        const valueExtra = props.input.row?.productExtraInformationDatas.find((productExtraInformationData) => productExtraInformationData.extraInformation.id === extra.id);
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
    form.setFieldsValue({
      code: props.input.row ? props.input.row.code : '',
      name: props.input.row ? props.input.row.name : '',
      brand: props.input.row ? props.input.row.brand : '',
      price: props.input.row ? props.input.row.price : undefined,
      description: props.input.row ? props.input.row.description : '',
      ...data,
    });
  }, [props.input.action, props.input.extraInformations]);
  return (
    <div id={props.input.row?.id} key="new-product" className="product-item selected" style={{ display: props.input.action === 'edit' && props.input.row ? 'block' : 'none' }}>
      <div className="product-item-header">
        <Row className="product-item-header-content">
          <Col span={0} className="product-item-header-content-left" />
          <Col span={24} className="product-item-header-content-right" style={{ height: '100%', justifyContent: 'center' }}>
            <span>New Product</span>
          </Col>
        </Row>
      </div>
      <div className="product-item-content">
        <div className="tab-view">
          <div className="product-detail" style={{ display: 'flex' }}>
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
                      <label>Name</label>
                      <Form.Item name="name" rules={[{ required: true, message: 'Name can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Brand</label>
                      <Form.Item name="brand" rules={[{ required: true, message: 'Brand can not be blank' }]}>
                        <Input />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="form-control">
                      <label>Price</label>
                      <Form.Item name="price" rules={[{ required: true, message: 'Price can not be blank' }]}>
                        <Input type="number" />
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
                  {props.input.extraInformations.filter((item) => !item.isDelete).map((item, index) => (
                    <FormControlComponent key={item.id + '-create'} input={{ index, item, active: -1 }} output={{}} />
                  ))}
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="product-item-footer" >
        <Row className="product-item-footer-content">
          <Col span={8} className="product-item-footer-content-left" />
          <Col span={8} className="product-item-footer-content-middle">
            <div className="product-item-footer-content-middle-buttons">
              <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                setSubmit('processing');
                form.isFieldsTouched(true);
                form.validateFields().then(() => {
                  const data = form.getFieldsValue();
                  const product: ProductVM | any = {};
                  const productExtras: { extraInformation: { id: string }, value: any }[] = [];
                  for (const key in data) {
                    if (Object.prototype.hasOwnProperty.call(data, key)) {
                      const value = data[key];
                      if (fields.includes(key)) {
                        product[key] = value;
                      } else {
                        productExtras.push({ value, extraInformation: { id: key.split('-<hr>-')[key.split('-<hr>-').length - 1] } });
                      }
                    }
                  }
                  setTimeout(() => {
                    dispatch(useProductAction().update({ ...props.input.row, ...product, productExtras },
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
          <Col xs={8} sm={8} md={0} className="product-item-footer-content-right" />
          <Col xs={0} sm={0} md={8} className="product-item-footer-content-right" />
        </Row>
      </div>
    </div>
  );
};