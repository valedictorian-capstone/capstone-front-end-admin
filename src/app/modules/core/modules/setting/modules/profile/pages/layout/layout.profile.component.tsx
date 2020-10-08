import { IBaseProps } from '@extras/interfaces';
import { Col, Layout, Row, Typography } from 'antd';
import React, { FC, useState } from 'react';
import { AccountPasswordComponent, AccountProfileComponent } from '../../components';
import './layout.profile.component.css';
const { Header, Content } = Layout;
export interface ILayoutProfileComponentProps extends IBaseProps {
  input?: {
    mode: number,
    header: string,
  };
  output?: {};
}

export const LayoutProfileComponent: FC<ILayoutProfileComponentProps> = (props: ILayoutProfileComponentProps) => {
  return (
    <>
      <Row style={{ minHeight: '7vh', padding: '12px 0 24px 40px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={23}>
          <Typography.Title style={{ textAlign: 'left' }} level={2}>
            <h2 style={{ fontSize: '2em' }}>{props.input?.header ?? 'Profile'}</h2>
            <hr />
          </Typography.Title>
        </Col>
      </Row>
      <Row style={{ minHeight: '7vh', height: 'fit-content', padding: '12px 60px 24px 60px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {props.children}
      </Row>
    </>
  );
};