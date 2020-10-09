import { IBaseProps } from '@extras/interfaces';
import { Col, Layout, Row, Typography } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import './company-main.component.css';
const { Header, Content } = Layout;
export interface ICompanyMainComponentProps extends IBaseProps {
  input?: {
    header?: string,
  };
  output?: {};
}

export const CompanyMainComponent: FC<ICompanyMainComponentProps> = (props: ICompanyMainComponentProps) => {
  return (
    <>
      <Row style={{ minHeight: '7vh', padding: '12px 0 24px 40px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={23}>
          <Typography.Title style={{ textAlign: 'left' }} level={2}>
            {props.input?.header ?? 'Company settings'}
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