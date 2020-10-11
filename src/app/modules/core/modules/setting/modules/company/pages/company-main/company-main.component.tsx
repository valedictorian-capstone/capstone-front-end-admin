import { IBaseProps } from '@extras/interfaces';
import { ContentSettingComponent, HeaderSettingComponent } from '@modules/core/modules/setting/components';
import { Layout } from 'antd';
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import './company-main.component.css';
const { Header, Content } = Layout;
export interface ICompanyMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const CompanyMainComponent: FC<ICompanyMainComponentProps> = (props: ICompanyMainComponentProps) => {
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