import { BellOutlined, ReloadOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { Badge, Empty, List, Popover, Spin, Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './notification.component.css';

export interface INotificationComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const NotificationComponent: React.FC<INotificationComponentProps> = (props: INotificationComponentProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.components.notification[region];
  const notifications = [];
  return (
    <Popover
      placement="bottomRight"
      trigger={['click']}
      content={
        <div style={{ width: 500, height: 500 }}>
          {notifications.length > 0
            ? <List />
            : <div className="centered">
              <Empty description={config.emptyDescription} />
            </div>
          }
        </div>
      }
      title={
        <span style={{ textAlign: 'center', display: 'block' }} onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1000);
        }}>
          {config.title}
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