import { BellOutlined, ReloadOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { Badge, Empty, List, Popover, Spin, Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './notification.component.css';

export interface INotificationComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const NotificationComponent = (props: INotificationComponentProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n[region].data.header.notification;
  const notifications = [];
  const content =
    <Spin spinning={loading} delay={0}>
      <Tabs defaultActiveKey="1" centered={false} size={'large'} className="tabs">
        {config?.tabs.map((tab) => (
          <Tabs.TabPane tab={tab.tab} key={tab.key}>
            {notifications.length > 0 ? <List /> : <Empty description={config?.emptyDescription} />}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Spin>;
  return (
    <Popover
      placement="bottomRight"
      trigger={['click']}
      content={content}
      title={
        <span style={{ textAlign: 'center', display: 'block' }} onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1000);
        }}>
          {config?.title}
          <span style={{ float: 'right', cursor: 'pointer' }}><ReloadOutlined /></span>
        </span>
      }
    >
      <span className="action">
        <Badge count={notifications.length}>
          <BellOutlined />
        </Badge>
      </span>
    </Popover>
  );
};