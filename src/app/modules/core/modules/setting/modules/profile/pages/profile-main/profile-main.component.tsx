import { IBaseProps } from '@extras/interfaces';
import { Col, Layout, Row, Typography } from 'antd';
import React, { FC, useState } from 'react';
import { AccountPasswordComponent, AccountProfileComponent } from '../../components';
import './profile-main.component.css';
const { Header, Content } = Layout;
export interface IProfileMainComponentProps extends IBaseProps {
  input?: {
    mode: number,
    header: string,
  };
  output?: {};
}

export const ProfileMainComponent: FC<IProfileMainComponentProps> = (props: IProfileMainComponentProps) => {
  return (
    <>
      <Row style={{ minHeight: '7vh', padding: '12px 0 24px 40px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={23}>
          <Typography.Title style={{ textAlign: 'left' }} level={2}>
            {props.input?.header ?? 'Profile'}
            <hr />
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ minHeight: '7vh', height: 'fit-content', padding: '12px 60px 24px  10%' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {props.children}
      </Row>
    </>
  );
};