import React from 'react';
import { Badge, List, Popover, Spin, Tabs, Empty } from 'antd';
import './notification.component.css';
import { BellOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/states';
import { environment } from '@environments/environment';
export const NotificationComponent = (props: {}) => {
  const region = useSelector<RootState>((state) => state.language.language.region);
  const data = environment.languages.find((lang) => lang.value === region)?.data.header.notification;
  const notifications = [];
  const content =
    // <Spin spinning={true} delay={0}>
    <Tabs defaultActiveKey="1" centered={false} size={'large'} className="tabs">
      {data?.tabs.map((tab) => (
        <Tabs.TabPane tab={tab.tab} key={tab.key}>
          {notifications.length > 0 ? <List /> : <Empty description={data?.emptyDescription} />}
        </Tabs.TabPane>
      ))}
    </Tabs>;
    // </Spin>;
  return (
    <Popover
      placement="bottomRight"
      trigger={['click', 'hover']}
      content={content}
    >
      <span className="action">
        <Badge count={notifications.length}>
          <BellOutlined />
        </Badge>
      </span>
    </Popover>
  );
};