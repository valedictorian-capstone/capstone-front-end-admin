import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, MinusCircleOutlined, RestOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { useProductAction } from '@stores/actions';
import { ExtraInformationVM, ProductVM } from '@view-models';
import { Button, Col, Empty, Popconfirm, Popover, Row, Tag } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert2';
import { ProductCreateComponent, ProductDetailComponent } from '..';
import './product-list.component.css';
export interface IProductListComponentProps extends IBaseProps {
  input: {
    rows: ProductVM[],
    action: 'create' | 'edit' | 'setting' | '',
    extraInformations: ExtraInformationVM[],
  };
  output: {
    onSelect: (row: ProductVM | undefined) => void,
    onActionChange: (action: 'create' | 'edit' | 'setting' | '') => void,
  };
}

export const ProductListComponent: React.FC<IProductListComponentProps> = (props: IProductListComponentProps) => {
  const [selected, setSelected] = React.useState<ProductVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | 'setting' | ''>(props.input.action);
  const edit = (row: ProductVM | undefined) => {
    setSelected(row);
    setAction('edit');
    props.output.onSelect(row);
    props.output.onActionChange('edit');
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    setAction(props.input.action);
  }, [props.input.action]);
  return (
    <div className="product-list" style={{ overflow: selected || action !== '' ? 'hidden' : 'auto' }}>
      {props.input.rows.map((row) => (
        <div id={row.id} key={row.id} className="product-item" style={{ display: !selected && action === '' ? 'block' : 'none' }}>
          <div className="product-item-header">
            <Row className="product-item-header-content">
              <Col span={12} className="product-item-header-content-left">
                <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
                  <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{row.code + '-' + row.name + '-' + row.brand}</b></span>
                  <span style={{ float: 'right' }}>
                    <Popover placement="bottomRight" trigger="click" content={
                      <>
                        <table style={{ border: '1px solid gray' }}>
                          <tbody>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th colSpan={2} style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Product Inproductation</th>
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
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Brand</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.brand}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Price</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.price}</th>
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
              <Col span={12} className="product-item-header-content-right">
                <Popconfirm
                  title={`Are you sure ${row.isDelete ? 'active' : 'deactive'} this product?`}
                  onConfirm={() => {
                    dispatch(row.isDelete ? useProductAction().active([row.id],
                      () => {
                        swal.fire('Notification', 'Actived successfully', 'success');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Actived failed', 'error');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                    ) : useProductAction().deactive([row.id],
                      () => {
                        swal.fire('Notification', 'Deactived successfully', 'success');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Deactived failed', 'error');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                    ));
                  }}
                  okText="Sure"
                  cancelText="No"
                >
                  <Button size="small" shape="circle" className="setting" danger={!row.isDelete} style={{ marginRight: 5 }} icon={row.isDelete ? <CheckCircleOutlined /> : <MinusCircleOutlined />} />
                </Popconfirm>
                <Popconfirm
                  title="Are you sure delete this product?"
                  onConfirm={() => {
                    dispatch(useProductAction().remove(row.id,
                      () => {
                        swal.fire('Notification', 'Removed successfully', 'success');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Removed failed', 'error');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                    ));
                  }}
                  okText="Sure"
                  cancelText="No"
                >
                  <Button size="small" shape="circle" className="setting" danger={true} type="primary" icon={<RestOutlined />} />
                </Popconfirm>
              </Col>
            </Row>
          </div>
          <div className="product-item-content" />
          <div className="product-item-footer" >
            <Row className="product-item-footer-content">
              <Col span={8} className="product-item-footer-content-left" />
              <Col span={8} className="product-item-footer-content-middle" />
              <Col xs={8} sm={8} md={0} className="product-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
              <Col xs={0} sm={0} md={8} className="product-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
            </Row>
          </div>
          <div className="product-item-edit">
            <Button size="large" shape="circle" icon={<EditOutlined />} className="setting" onClick={() => edit(row)} />
          </div>
        </div>
      ))
      }
      {(props.input.rows.length === 0 && action === '') && <div style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}><Empty /></div>}
      <ProductDetailComponent input={{ row: selected, action, extraInformations: props.input.extraInformations }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
      <ProductCreateComponent input={{ action, extraInformations: props.input.extraInformations }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
    </div>
  );
};