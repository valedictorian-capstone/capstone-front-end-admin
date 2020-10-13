import { CheckCircleOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, MinusCircleOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { CloseOutlined } from '@material-ui/icons';
import { Col, Row } from 'antd';
import React from 'react';
import {
  TableHeaderComponent,
  TableColComponent,
  TableEmptyComponent,
  TableFooterComponent,
  TableRowComponent,
  TableSearchComponent,
  TablePaginationComponent,
  TableSettingComponent,
  TableStickComponent,
  TableRenderComponent,
} from '../../components';
import './table-main.component.css';

export interface ITableMainComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    rows: T[],
    columns: Array<{
      name: string,
      label: string,
      width: string | number,
      type: 'normal' | 'status',
      search: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' } | string[],
    }>,
    tableWidth: string | number,
    rowHeight: string | number,
    extraHeaderButtons?: Array<JSX.Element>,
    extraSettingButtons?: Array<JSX.Element>,
    emptyContent?: {
      message: string | React.ReactNode,
      showCard?: boolean,
    } | React.ReactNode,
    pagination?: {
      itemPerPageOptions: Array<{
        label: string | React.ReactNode,
        value: string,
      }>,
      maxPageSHow: 3 | 4 | 5,
    },
    showButton?: {
      create?: boolean,
      edit?: boolean,
      deactive?: boolean,
      active?: boolean,
      setting?: boolean,
      preview?: boolean,
      remove?: boolean,
      import?: boolean,
      export?: boolean,
    },
    customButton?: {
      create?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
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
      setting?: {
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
      import?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
      exporrt?: {
        tooltip: {
          placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
          title: string,
        },
        type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text',
        icon: React.ReactNode,
      },
    },
    region: 'vi' | 'en' | 'jp',
  };
  output: {
    onClickCreate?: () => void,
    onClickDeactive?: () => void,
    onClickActive?: () => void,
    onClickSetting?: () => void,
    onClickRemove?: () => void,
    onClickImport?: () => void,
    onClickExport?: () => void,
    onStick?: (rows: T[]) => void,
    onSelect?: (data: T) => void,
    onPreview?: (data: T) => void,
    onDeactive?: (data: T) => void,
    onActive?: (data: T) => void,
    onRemove?: (data: T) => void,
  };
}

export const TableMainComponent: <T extends { [key: string]: any }>(props: ITableMainComponentProps<T>) => JSX.Element = ({
  input = {
    title: '',
    rows: [],
    columns: [],
    rowHeight: '3rem',
    tableWidth: '100%',
    extraHeaderButtons: [],
    extraSettingButtons: [],
    emptyContent: {
      message: 'No record found',
      showCard: true,
    },
    showButton: {
      active: true,
      create: true,
      deactive: true,
      edit: true,
      preview: true,
      remove: true,
      setting: true,
      export: true,
      import: true,
    },
    customButton: {
      create: {
        tooltip: {
          placement: 'top',
          title: 'Click to create',
        },
        type: 'default',
        icon: <PlusOutlined />,
      },
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
      setting: {
        tooltip: {
          placement: 'top',
          title: 'Click to setting',
        },
        type: 'default',
        icon: <SettingOutlined />,
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
      import: {
        tooltip: {
          placement: 'top',
          title: 'Click to import',
        },
        type: 'default',
        icon: <FileExcelOutlined />,
      },
      export: {
        tooltip: {
          placement: 'top',
          title: 'Click to export',
        },
        type: 'default',
        icon: <DownloadOutlined />,
      },
    },
    region: 'en',
  },
  output = {
    onClickCreate: () => { },
    onClickDeactive: () => { },
    onClickActive: () => { },
    onClickSetting: () => { },
    onClickRemove: () => { },
    onClickImport: () => { },
    onClickExport: () => { },
    onStick: ([]) => { },
    onSelect: (data) => { },
    onPreview: (data) => { },
    onDeactive: (data) => { },
    onActive: (data) => { },
    onRemove: (data) => { },
  },
  children,
  className,
  component,
  exact,
  fatherProps,
  id,
  location,
  path,
  render,
  sensitive,
  strict,
  styles,
}) => {
  return (
    <>
      <TableHeaderComponent input={{}} output={{}} />
      <Row style={{ height: '80%', maxHeight: '80%', overflow: 'auto' }}>
        <Col xxl={2} xl={2} lg={2} md={4} sm={4} xs={4}>
          <TableStickComponent input={{
            ...input,
          }} output={{
            ...output,
          }} />
        </Col>
        <Col xxl={20} xl={20} lg={20} md={16} sm={16} xs={16}>
          <TableRenderComponent input={{
            ...input,
          }} output={{
            ...output,
          }} />
        </Col>
        <Col xxl={2} xl={2} lg={2} md={4} sm={4} xs={4}>
          <TableSettingComponent input={{
            ...input,
            showButton: { ...input.showButton },
            customButton: { ...input.customButton },
          }} output={{
            ...output,
          }} />
        </Col>
      </Row>
      <TablePaginationComponent input={{}} output={{}} />
      <TableFooterComponent input={{}} output={{}} />
    </>
  );
};