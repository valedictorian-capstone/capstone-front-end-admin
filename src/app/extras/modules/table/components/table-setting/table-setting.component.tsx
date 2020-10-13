import { CheckCircleOutlined, CloseOutlined, EditOutlined, EyeOutlined, MinusCircleOutlined, SettingOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { Button, Popconfirm, Popover, Tooltip } from 'antd';
import React from 'react';
import './table-setting.component.css';

export interface ITableSettingComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    rows: T[],
    showButton?: {
      edit?: boolean,
      deactive?: boolean,
      active?: boolean,
      preview?: boolean,
      remove?: boolean,
    },
    customButton?: {
      edit?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
      deactive?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
      active?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
      preview?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
      remove?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
    },
    rowHeight: string | number,
    region: 'vi' | 'en' | 'jp',
  };
  output: {
    onSelect?: (data: T) => void,
    onPreview?: (data: T) => void,
    onDeactive?: (data: T) => void,
    onActive?: (data: T) => void,
    onRemove?: (data: T) => void,
  };
}

export const TableSettingComponent: <T extends { [key: string]: any }>(props: ITableSettingComponentProps<T>) => JSX.Element = ({
  input = {
    rows: [],
    showButton: {
      active: true,
      deactive: true,
      edit: true,
      preview: true,
      remove: true,
    },
    customButton: {
      edit: {
        tooltip: {
          placement: 'top',
          title: 'Click to edit',
        },
        type: 'default',
        icon: <EditOutlined />,
      },
      deactive: {
        tooltip: {
          placement: 'top',
          title: 'Click to deactive',
        },
        type: 'default',
        icon: <MinusCircleOutlined />,
      },
      active: {
        tooltip: {
          placement: 'top',
          title: 'Click to active',
        },
        type: 'default',
        icon: <CheckCircleOutlined />,
      },
      preview: {
        tooltip: {
          placement: 'top',
          title: 'Click to preview',
        },
        type: 'default',
        icon: <EyeOutlined />,
      },
      remove: {
        tooltip: {
          placement: 'top',
          title: 'Click to remove',
        },
        type: 'default',
        icon: <CloseOutlined />,
      },
    },
    rowHeight: '4rem',
    region: 'en',
  },
  output = {
    onSelect: (data) => { },
    onPreview: (data) => { },
    onDeactive: (data) => { },
    onActive: (data) => { },
    onRemove: (data) => { },
  },
}) => {
  const config = environment.i18n.extras.modules.table.components['table-setting'][input.region];
  return (
    <>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ height: '3rem', textAlign: 'center' }}>
            <th />
          </tr>
          <tr style={{ height: '3rem', textAlign: 'center' }}>
            <th>
              <span>Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {input.rows.map((row, i) => (
            <tr key={i} style={{ height: '3rem', textAlign: 'center' }}>
              <td>
                <Popover placement="left" trigger="hover" content={
                  <>
                    <Tooltip placement="top" title={config.edit.tooltip}>
                      <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting" onClick={() => output.onSelect ? output.onSelect(row) : (() => { })()} ><EditOutlined /></Button>
                    </Tooltip>
                    <Tooltip placement="top" title={config.preview.tooltip}>
                      <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting" onClick={() => output.onSelect ? output.onSelect(row) : (() => { })()} ><EyeOutlined /></Button>
                    </Tooltip>
                    <Popconfirm
                      title={config.active.confirm}
                      placement="top"
                      onConfirm={() => output.onActive ? output.onActive(row) : (() => { })()}
                      okText={config.active.yes}
                      cancelText={config.active.no}
                    >
                      <Tooltip placement="top" title={config.active.tooltip}>
                        <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><CheckCircleOutlined /></Button>
                      </Tooltip>
                    </Popconfirm>
                    <Popconfirm
                      title={config.deactive.confirm}
                      placement="top"
                      onConfirm={() => output.onDeactive ? output.onDeactive(row) : (() => { })()}
                      okText={config.deactive.yes}
                      cancelText={config.deactive.no}
                    >
                      <Tooltip placement="top" title={config.deactive.tooltip}>
                        <Button size="small" className="setting" style={{ marginRight: 10 }} shape="circle" danger={true} icon={<MinusCircleOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                    <Popconfirm
                      title={config.remove.confirm}
                      placement="top"
                      onConfirm={() => output.onRemove ? output.onRemove(row) : (() => { })()}
                      okText={config.remove.yes}
                      cancelText={config.remove.no}
                    >
                      <Tooltip placement="top" title={config.remove.tooltip}>
                        <Button size="small" className="setting" style={{ marginRight: 10 }} shape="circle" danger={true} icon={<CloseCircleOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                  </>
                }>
                  <Button shape="circle" className="setting"><SettingOutlined /></Button>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};