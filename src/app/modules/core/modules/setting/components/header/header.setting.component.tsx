import { IBaseProps } from '@extras/interfaces';
import { Col, Layout, Row, Typography } from 'antd';
import React, { FC } from 'react';
import './header.setting.component.scss';
const { Header } = Layout;
export interface IHeaderSettingComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const HeaderSettingComponent: FC<IHeaderSettingComponentProps> = (props: IHeaderSettingComponentProps) => {
  return (
    <Header
      className={props.className}
      id={props.id}
      style={{
        ...props.styles,
        background: 'white',
        padding: '0px 20px 0px 20px',
        height: 'auto',
      }}
    >
      <div className="header">
        <div className="left">
          <Row style={{ minHeight: '7vh', padding: '12px 0 24px 40px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={23}>
              <Typography.Title style={{ textAlign: 'left' }} level={2}>
                {props.children}
                <hr />
              </Typography.Title>
            </Col>
          </Row>
        </div>
      </div>
    </Header>
  );
};