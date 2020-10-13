import { IBaseProps } from '@extras/interfaces';
import { AccountComponent, ContentComponent, HeaderComponent, LanguageComponent, NotificationComponent, SideBarComponent } from '@modules/core/components';
import { RootState } from '@stores/states';
import { Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './layout.component.css';
import { ProgressBar } from 'primereact/progressbar';
export interface ILayoutComponentProps extends IBaseProps {
  input: {};
  output: {};
}
export const LayoutComponent: React.FC<ILayoutComponentProps> = (props: ILayoutComponentProps) => {
  const account: any = localStorage.getItem('m-crm-username');
  const status = useSelector<RootState, boolean>((state: RootState) => state.loading.loading.status);
  const [toggle, setToggle] = React.useState<boolean>(false);
  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <SideBarComponent fatherProps={props} input={{ toggle }} output={{ onOutSideClick: () => toggle ? setToggle(false) : (() => { })() }} />
      <Layout className="site-layout">
        <HeaderComponent fatherProps={props} input={{}} output={{ onToggle: () => setToggle(!toggle) }}>
          <NotificationComponent fatherProps={props} input={{}} output={{}} />
          {account && <AccountComponent fatherProps={props} output={{}} input={{ account }} />}
          <LanguageComponent fatherProps={props} input={{}} output={{}} />
        </HeaderComponent>
        {status && <ProgressBar mode="indeterminate" style={{ height: '4px' }} />}
        <ContentComponent fatherProps={props} input={{}} output={{}}>
          {props.children}
        </ContentComponent>
      </Layout>
    </Layout>
  );
};