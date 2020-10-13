import { DownSquareOutlined, SearchOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { Button, Col, Input, Popconfirm, Popover, Select, Tooltip } from 'antd';
import React from 'react';
import './list-header.component.css';

export interface IListHeaderComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    title: string | React.ReactNode,
    rows: T[],
    sticks: T[],
    headerButtons?: {
      name: string,
      tooltip: {
        placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
        title: string;
      },
      icon: React.ReactNode,
      type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
      size: 'small' | 'middle' | 'large' | undefined,
      shape: 'circle' | 'circle-outline' | 'round',
      func?: (rows?: T[]) => void,
      showType: 'when-have-stick' | 'always',
      danger?: boolean,
      popConfirm?: {
        onConfirm: () => void,
        okText: string,
        cancelText: string,
      },
    }[],
    searchOptions?: {
      key: string,
      type: 'select' | 'input',
      label: string,
      options?: { label: string | React.ReactNode, value: string }[],
    }[],
    globalSearch?: {
      keys: string[],
      label: string,
      extra: {
        title: string | React.ReactNode,
        button: string | React.ReactNode,
      },
    },
  };
  output: {
    onSearch?: (rows: T[]) => void,
  };
}

export const ListHeaderComponent: <T extends { [key: string]: any }>(props: IListHeaderComponentProps<T>) => JSX.Element = (props) => {
  const renderButton = (button: any, index: number) => {
    if (button.popConfirm) {
      return <Popconfirm  key={index + '-' + button.name} placement={button.tooltip.placement} title={button.tooltip.title} onConfirm={() => button.popConfirm.onConfirm(props.input.sticks)} okText={button.popConfirm.yes} cancelText={button.popConfirm.no}>
        <Tooltip placement={button.tooltip.placement} title={button.tooltip.title}>
          <Button size={button.size} className="setting" danger={button.danger} style={{ margin: 5 }} type={button.type} shape={button.shape} icon={button.icon} />
        </Tooltip>
      </Popconfirm>;
    } else {
      return <Tooltip key={index + '-' + button.name} placement={button.tooltip.placement} title={button.tooltip.title}>
        <Button size={button.size} className="setting" danger={button.danger} style={{ margin: 5 }} onClick={() => button.func ? button.func(button.showType === 'when-have-stick' ? props.input.sticks : []) : (() => { })()} type={button.type} shape={button.shape} icon={button.icon} />
      </Tooltip>;
    }
  };
  return (
    <>
      <Col xs={0} sm={0} md={0} lg={8} xl={8} xxl={8} className="list-header-left">
        {(props.input.headerButtons || []).map((button, index) => (
          (button.showType === 'always' || (button.showType === 'when-have-stick' && props.input.sticks.length > 0)) && renderButton(button, index)
        ))}
      </Col>
      <Col xs={6} sm={3} md={3} lg={0} xl={0} xxl={0} className="list-header-left" style={{ textAlign: 'center' }}>
        <Popover style={{ width: 'fit-content' }} placement="bottom" trigger="click" content={
          <div style={{ display: 'grid' }}>
            {(props.input.headerButtons || []).map((button, index) => (
              (button.showType === 'always' || (button.showType === 'when-have-stick' && props.input.sticks.length > 0)) && renderButton(button, index)
            ))}
          </div>
        }>
          <Button size="small" shape="circle" type="primary" icon={<DownSquareOutlined />} />
        </Popover>
      </Col >
      <Col xs={12} sm={18} md={18} lg={8} xl={8} xxl={8} className="list-header-middle">
        <div>
          <span>{props.input.title}</span>
        </div>
      </Col>
      <Col xs={6} sm={3} md={3} lg={0} xl={0} xxl={0} className="list-header-right" style={{ textAlign: 'center' }}>
        <Popover placement="bottomRight" trigger="click" style={{ width: '30rem' }} title={props.input.globalSearch?.extra.title} content={
          <>
            {props.input.searchOptions?.map((option, index) => {
              if (option.type === 'input') {
                return <Input key={index} placeholder={option.label} style={{ width: '100%', marginBottom: 15 }} />;
              } else {
                return <Select key={index} style={{ width: '100%', marginBottom: 15 }} placeholder={option.label}>
                  {option.options?.map((op) => (
                    <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>
                  ))}
                </Select>;
              }
            })}
            <span style={{ display: 'block', textAlign: 'center' }}>
              <Button style={{ width: '60%' }} type="primary" icon={<SearchOutlined />} >{props.input.globalSearch?.extra.button}</Button>
            </span>
          </>
        }>
          <Button size="small" shape="circle" type="primary" icon={<SearchOutlined />} />
        </Popover>
      </Col>
      <Col xs={0} sm={0} md={0} lg={8} xl={8} xxl={8} className="list-header-right">
        <Input
          size="middle"
          width={'60%'}
          placeholder={props.input.globalSearch?.label}
          prefix={<SearchOutlined />}
          addonAfter={
            <Popover placement="bottomRight" trigger="click" title={props.input.globalSearch?.extra.title} content={
              <>
                {props.input.searchOptions?.map((option, index) => {
                  if (option.type === 'input') {
                    return <Input key={index} placeholder={option.label} style={{ width: '100%', marginBottom: 15 }} />;
                  } else {
                    return <Select key={index} style={{ width: '100%', marginBottom: 15 }} placeholder={option.label}>
                      {option.options?.map((op) => (
                        <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>
                      ))}
                    </Select>;
                  }
                })}
                <span style={{ display: 'block', textAlign: 'center' }}>
                  <Button style={{ width: '60%' }} type="primary" icon={<SearchOutlined />} >{props.input.globalSearch?.extra.button}</Button>
                </span>
              </>
            }>
              <Button size="small" shape="circle" type="primary" icon={<SearchOutlined />} />
            </Popover>
          }
        />
      </Col>
    </>
  );
};