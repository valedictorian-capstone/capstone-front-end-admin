import { IBaseProps } from '@extras/interfaces';
import { Col, Row } from 'antd';
import React, { FC } from 'react';
import './company-main.component.css';

export interface ICompanyMainComponentProps extends IBaseProps {
  input?: {
    mode: number,
  };
  output?: {};
}

export const CompanyMainComponent: FC<ICompanyMainComponentProps> = (props: ICompanyMainComponentProps) => {
  const content = () => {
    return (<></>);
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={12}>
        {content()}
      </Col>
    </Row>
  );
};