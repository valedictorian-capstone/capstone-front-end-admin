import { IBaseProps } from '@extras/interfaces';
import { HeaderSettingComponent, ContentSettingComponent } from '@modules/core/modules/setting/components';
import { Col, Layout, Row, Typography } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './security-main.component.css';
const { Header, Content } = Layout;
export interface ISecurityMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const SecurityMainComponent: FC<ISecurityMainComponentProps> = (props: ISecurityMainComponentProps) => {
  const location = useLocation();
  const header = () => {
    const arr = (location.pathname.split('/')[4]).split('-');
    let result = '';
    arr.map((value: string) => {
      result += value[0].toUpperCase() + value.slice(1) + ' ';
    });
    return result;
  };
  return (
    <>
      <Layout className="site-layout">
        <HeaderSettingComponent>
          {header()}
        </HeaderSettingComponent>
        <ContentSettingComponent fatherProps={props} input={{}} output={{}}>
          {props.children}
        </ContentSettingComponent>
      </Layout>
    </>
  );
};