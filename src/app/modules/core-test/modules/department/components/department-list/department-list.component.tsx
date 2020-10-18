import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, MinusCircleOutlined, RestOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { useDepartmentAction } from '@stores/actions';
import { DepartmentVM } from '@view-models';
import { Button, Col, Empty, Popconfirm, Popover, Row, Tag } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert2';
import { DepartmentCreateComponent, DepartmentDetailComponent } from '..';
import './department-list.component.css';
export interface IDepartmentListComponentProps extends IBaseProps {
  input: {
    rows: DepartmentVM[],
    action: 'create' | 'edit' | '',
  };
  output: {
    onSelect: (row: DepartmentVM | undefined) => void,
    onActionChange: (action: 'create' | 'edit' | '') => void,
  };
}

export const DepartmentListComponent: React.FC<IDepartmentListComponentProps> = (props: IDepartmentListComponentProps) => {
  const [selected, setSelected] = React.useState<DepartmentVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>(props.input.action);
  const edit = (row: DepartmentVM | undefined) => {
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
    <div className="department-list" style={{ overflow: selected || action !== '' ? 'hidden' : 'auto' }}>
      {props.input.rows.map((row) => (
        <div id={row.id + '-item'} key={row.id + '-item'} className="department-item" style={{ display: !selected && action === '' ? 'block' : 'none' }}>
          <div className="department-item-header">
            <Row className="department-item-header-content">
              <Col span={12} className="department-item-header-content-left">
                <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
                  <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{row.name}</b></span>
                </Tag>
              </Col>
              <Col span={12} className="department-item-header-content-right">
                <Popconfirm
                  title={`Are you sure ${row.isDelete ? 'active' : 'deactive'} this department?`}
                  onConfirm={() => {
                    dispatch(row.isDelete ? useDepartmentAction().active([row.id],
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
                    ) : useDepartmentAction().deactive([row.id],
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
                  title="Are you sure delete this department?"
                  onConfirm={() => {
                    dispatch(useDepartmentAction().remove(row.id,
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
          <div className="department-item-content" />
          <div className="department-item-footer" >
            <Row className="department-item-footer-content">
              <Col span={8} className="department-item-footer-content-left" />
              <Col span={8} className="department-item-footer-content-middle" />
              <Col xs={8} sm={8} md={0} className="department-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
              <Col xs={0} sm={0} md={8} className="department-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
            </Row>
          </div>
          <div className="department-item-edit">
            <Button size="large" shape="circle" icon={<EditOutlined />} className="setting" onClick={() => edit(row)} />
          </div>
        </div>
      ))
      }
      {(props.input.rows.length === 0 && action === '') && <div style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}><Empty /></div>}
      <DepartmentDetailComponent input={{ row: selected, action, rows: props.input.rows }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
      <DepartmentCreateComponent input={{ action, rows: props.input.rows }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
    </div>
  );
};