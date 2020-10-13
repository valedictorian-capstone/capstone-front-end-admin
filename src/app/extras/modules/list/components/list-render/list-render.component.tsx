import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './list-render.component.css';
import { Row, Col, Checkbox, Popover, Button, Tooltip, Popconfirm } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export interface IListRenderComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    rows: T[],
    renderItem: (data: T, index: number) => JSX.Element,
    itemButtons?: {
      name: string,
      tooltip: {
        placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
        title: string;
      },
      icon: React.ReactNode,
      type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
      size: 'small' | 'middle' | 'large' | undefined,
      shape: 'circle' | 'circle-outline' | 'round',
      danger?: boolean,
      func?: (data: T) => void,
      popConfirm?: {
        onConfirm: () => void,
        okText: string,
        cancelText: string,
      },
    }[],
  };
  output: {
    onStick?: (rows: T[]) => void,
  };
}

export const ListRenderComponent: <T extends { [key: string]: any }>(props: IListRenderComponentProps<T>) => JSX.Element = (props) => {
  const [sticks, setSticks] = React.useState<any[]>([]);
  const [active, setActive] = React.useState<number>(-1);
  React.useEffect(() => {
    props.output.onStick ? props.output.onStick(sticks) : (() => { })();
    console.log(sticks);
  }, [sticks]);
  const renderButton = (row: any, button: any, index: number) => {
    if (button.popConfirm) {
      return <Popconfirm key={index + '-' + button.name} placement={button.tooltip.placement} title={button.tooltip.title} onConfirm={() => button.popConfirm.onConfirm([row])} okText={button.popConfirm.yes} cancelText={button.popConfirm.no}>
        <Tooltip placement={button.tooltip.placement} title={button.tooltip.title}>
          <Button size={button.size} className="setting" danger={button.danger} style={{ margin: 5 }} type={button.type} shape={button.shape} icon={button.icon} />
        </Tooltip>
      </Popconfirm>;
    } else {
      return <Tooltip key={index + '-' + button.name} placement={button.tooltip.placement} title={button.tooltip.title}>
        <Button size={button.size} className="setting" danger={button.danger} style={{ margin: 5 }} onClick={() => button.func ? button.func(button.showType === 'when-have-stick' ? [row] : []) : (() => { })()} type={button.type} shape={button.shape} icon={button.icon} />
      </Tooltip>;
    }
  };
  return (
    <div style={{ maxHeight: '100%', overflow: 'auto', width: '100%', whiteSpace: 'nowrap' }}>
      {props.input.rows.map((row, index) => <Row key={index} className={`list-render-item ${active === index ? 'active' : ''}`} onClick={() => setActive(index)}>
        <Col xs={4} sm={4} md={4} lg={2} xl={1} xxl={1} style={{ textAlign: 'center' }}>
          <Checkbox onChange={(e) => {
            if (e.target.checked) {
              sticks.push(row);
              setSticks([...sticks]);
            } else {
              setSticks(sticks.filter((stick) => stick.id !== row.id));
            }
          }} />
        </Col>
        <Col xs={16} sm={16} md={16} lg={18} xl={22} xxl={22}>
          {props.input.renderItem(row, index)}
        </Col>
        <Col xs={4} sm={4} md={4} lg={2} xl={1} xxl={1} style={{ textAlign: 'center' }}>
          <Popover placement="left" trigger="click" content={
            <>
              {(props.input.itemButtons || []).map((button, i) => (
                renderButton(row, button, i)
              ))}
            </>
          }>
            <Button size="small" shape="circle" className="setting" type="primary" icon={<SettingOutlined />} />
          </Popover>
        </Col>
      </Row>,
      )}
    </div>
  );
};