import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ContentSettingComponent, HeaderSettingComponent } from '../../components';
import './layout.setting.component.css';
export interface ILayoutSettingComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const LayoutSettingComponent: React.FC<ILayoutSettingComponentProps> = (props: ILayoutSettingComponentProps) => {
  const account: any = localStorage.getItem('m-crm-username');
  const status = useSelector<RootState, boolean>((state: RootState) => state.loading.loading.status);
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
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <ContentSettingComponent fatherProps={props} input={{}} output={{}}>
        <Layout className="site-layout">
          <HeaderSettingComponent>
            {header()}
          </HeaderSettingComponent>
          <ContentSettingComponent fatherProps={props} input={{}} output={{}}>
            {props.children}
          </ContentSettingComponent>
        </Layout>
      </ContentSettingComponent>
    </Layout>
  );
};