import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, MinusCircleOutlined, RestOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { usePatternAction } from '@stores/actions';
import { PatternVM } from '@view-models';
import { Button, Col, Empty, Popconfirm, Popover, Row, Tag } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert2';
import { PatternCreateComponent, PatternDetailComponent } from '..';
import './pattern-list.component.css';
export interface IPatternListComponentProps extends IBaseProps {
  input: {
    rows: PatternVM[],
    action: 'create' | 'edit' | '',
  };
  output: {
    onSelect: (row: PatternVM | undefined) => void,
    onActionChange: (action: 'create' | 'edit' | '') => void,
  };
}

export const PatternListComponent: React.FC<IPatternListComponentProps> = (props: IPatternListComponentProps) => {
  const [selected, setSelected] = React.useState<PatternVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>(props.input.action);
  const edit = (row: PatternVM | undefined) => {
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
    <div className="pattern-list" style={{ overflow: selected || action !== '' ? 'hidden' : 'auto' }}>
      {props.input.rows.map((row) => (
        <div id={row.id} key={row.id} className="pattern-item" style={{ display: !selected && action === '' ? 'block' : 'none' }}>
          <div className="pattern-item-header">
            <Row className="pattern-item-header-content">
              <Col span={12} className="pattern-item-header-content-left">
                <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
                  <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{row.name}</b></span>
                </Tag>
              </Col>
              <Col span={12} className="pattern-item-header-content-right">
                <Popconfirm
                  title={`Are you sure ${row.isDelete ? 'active' : 'deactive'} this pattern?`}
                  onConfirm={() => {
                    dispatch(row.isDelete ? usePatternAction().active([row.id],
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
                    ) : usePatternAction().deactive([row.id],
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
                  title="Are you sure delete this pattern?"
                  onConfirm={() => {
                    dispatch(usePatternAction().remove(row.id,
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
          <div className="pattern-item-content" />
          <div className="pattern-item-footer" >
            <Row className="pattern-item-footer-content">
              <Col span={8} className="pattern-item-footer-content-left" />
              <Col span={8} className="pattern-item-footer-content-middle" />
              <Col xs={8} sm={8} md={0} className="pattern-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
              <Col xs={0} sm={0} md={8} className="pattern-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
            </Row>
          </div>
          <div className="pattern-item-edit">
            <Button size="large" shape="circle" icon={<EditOutlined />} className="setting" onClick={() => edit(row)} />
          </div>
        </div>
      ))
      }
      {(props.input.rows.length === 0 && action === '') && <div style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}><Empty /></div>}
      <PatternDetailComponent input={{ row: selected, action }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
      <PatternCreateComponent input={{ action }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
    </div>
  );
};