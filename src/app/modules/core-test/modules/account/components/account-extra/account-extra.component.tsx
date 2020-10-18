import { CheckCircleOutlined, CheckOutlined, EyeOutlined, InfoCircleOutlined, MinusCircleOutlined, MinusOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useExtraInformationAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { ExtraInformationVM } from '@view-models';
import { Button, Col, Form, Input, message, Popover, Result, Row, Tag } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { TabPanel, TabView } from 'primereact/tabview';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccountEditableComponent, AccountPreviewComponent } from '..';
import './account-extra.component.css';
import swal from 'sweetalert2';
export interface IAccountExtraComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | 'setting' | '',
    extraInformations: ExtraInformationVM[],
  };
  output: {
    onDone: () => void,
  };
}

export const AccountExtraComponent: React.FC<IAccountExtraComponentProps> = (props: IAccountExtraComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [index, setIndex] = React.useState<number>(0);
  const [editing, setEditing] = React.useState<boolean>(false);
  const [extraInformations, setAccountExtraInformations] = React.useState<ExtraInformationVM[]>(props.input.extraInformations);
  const dispatch = useDispatch();
  return (
    <div id="account-extra" key="account-extra" className="account-extra">
      <div className="account-item selected">
        <div className="account-item-header">
          <Row className="account-item-header-content">
            <Col span={0} className="account-item-header-content-left" />
            <Col span={24} className="account-item-header-content-right" style={{ height: '100%', justifyContent: 'center' }}>
              <span>Account Extra Information</span>
            </Col>
          </Row>
        </div>
        <div className="account-item-content">
          <TabView activeIndex={index} onTabChange={(e) => setIndex(e.index)}>
            <TabPanel contentClassName="editable" header={
              <>
                <span className="text">
                  Setting
      </span>
                <span className="icon">
                  <SettingOutlined />
                </span>
              </>
            } headerStyle={{ width: '50%' }} />
            <TabPanel disabled={editing} header={
              <>
                <span className="text">
                  Preview
        </span>
                <span className="icon">
                  <EyeOutlined />
                </span>
              </>
            } headerStyle={{ width: '50%' }} />
          </TabView>
          <div className="tab-view">
            <div className="account-editable" style={{ display: index === 0 ? 'block' : 'none' }}>
              <AccountEditableComponent input={{ extraInformations: props.input.extraInformations }} output={{
                onEdit: setEditing,
                onDone: (data) => {
                  setAccountExtraInformations(data);
                },
              }} />
            </div>
            <div className="account-preview" style={{ display: index === 1 ? 'block' : 'none' }}>
              <AccountPreviewComponent input={{ extraInformations }} output={{}} />
            </div>
          </div>
        </div>
        <div className="account-item-footer" >
          <Row className="account-item-footer-content">
            <Col span={8} className="account-item-footer-content-left" />
            <Col span={8} className="account-item-footer-content-middle">
              <div className="account-item-footer-content-middle-buttons">
                <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                  setSubmit('processing');
                  setTimeout(() => {
                    dispatch(useExtraInformationAction().update(extraInformations.map((accountExtraInformation, i) => ({ ...accountExtraInformation, position: i })),
                      () => {
                        swal.fire('Notification', 'Save successfully', 'success');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Save failed', 'error');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                    ));
                  }, 1000);
                }} disabled={submit === 'processing'} loading={submit === 'processing'} className="setting" />
                <Button size="middle" shape="circle" icon={<MinusOutlined />} danger={true} className="setting" disabled={submit === 'processing'} onClick={props.output.onDone} />
              </div>
            </Col>
            <Col xs={8} sm={8} md={0} className="account-item-footer-content-right" />
            <Col xs={0} sm={0} md={8} className="account-item-footer-content-right" />
          </Row>
        </div>
      </div>
    </div>
  );
};