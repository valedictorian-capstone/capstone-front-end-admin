import { IBaseProps } from '@extras/interfaces';
import { AccountComponent, ContentComponent, HeaderComponent, LanguageComponent, NotificationComponent, SideBarComponent } from '@modules/core/components';
import { RootState } from '@stores/states';
import { Col, Layout, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './layout.component.css';
import { ProgressBar } from 'primereact/progressbar';
import { MenuOutlined, AccountCircleOutlined, HomeOutlined } from '@material-ui/icons';
import { SideBarLeftComponent, SideBarRightComponent } from '@modules/core-test/components';
export interface ILayoutComponentProps extends IBaseProps {
  input: {};
  output: {};
}
export const LayoutComponent: React.FC<ILayoutComponentProps> = (props: ILayoutComponentProps) => {
  const account: any = localStorage.getItem('m-crm-username');
  const status = useSelector<RootState, boolean>((state: RootState) => state.loading.loading.status);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [scroll, setScroll] = React.useState<boolean>(false);
  const [stick, setStick] = React.useState<string>('');
  return (
    <>
      <Row className="layout-header">
        <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={1} className="layout-header-icon left">
          <div className="layout-header-menu-main">
            <span className="layout-header-menu left">
              <MenuOutlined fontSize="default" onClick={() => setStick('left')} />
            </span>
          </div>
        </Col>
        <Col xs={4} sm={2} md={2} lg={0} xl={0} xxl={0} className="layout-header-icon left">
          <div className="layout-header-menu-main">
            <span className="layout-header-menu left">
              <MenuOutlined fontSize="default" onClick={() => setStick('left')} />
            </span>
          </div>
        </Col>
        <Col xs={16} sm={20} md={20} lg={20} xl={20} xxl={22} className="layout-header main" onClick={() => setStick('')}>
          <Row />
        </Col>
        <Col xs={4} sm={2} md={2} lg={0} xl={0} xxl={0} className="layout-header-icon right">
          <div className="layout-header-menu-main">
            <span className="layout-header-menu right">
              <AccountCircleOutlined fontSize="large" onClick={() => setStick('right')} />
            </span>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={1} className="layout-header-icon right">
          <div className="layout-header-menu-main">
            <span className="layout-header-menu right">
              <AccountCircleOutlined fontSize="large" onClick={() => setStick('right')} />
            </span>
          </div>
        </Col>
      </Row>
      <Row className="layout-body">
        <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={1} className={'layout-body-side-bar' + (stick === 'left' ? ' stick-left' : '')}>
          <SideBarLeftComponent input={{ stick }} output={{}} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={22} className="layout-body-main" onClick={() => setStick('')}>
          {status && <ProgressBar mode="indeterminate" style={{ height: '4px' }} />}
          <Row className={'layout-body-main-header' + (scroll ? ' stick' : '')}>
            <Col />
          </Row>
          <Row className="layout-body-main-body" onScroll={(e) => setScroll((e.target as any).scrollTop > 0 ? true : false)}>
            {props.children}
          </Row>
        </Col>
        <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={1} className={'layout-body-side-bar' + (stick === 'right' ? ' stick-right' : '')}>
          <SideBarRightComponent input={{ stick }} output={{}} />
        </Col>
      </Row>
      {/* <Row className="layout-footer">
        <span />
      </Row> */}

    </>
  );
};