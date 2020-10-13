import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './list-main.component.css';
import { Row } from 'antd';
import { ListHeaderComponent, ListRenderComponent, ListFooterComponent, ListItemComponent } from '../../components';

export interface IListMainComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    title: string | React.ReactNode,
    rows: T[],
    renderItem: (data: T, index: number) => JSX.Element,
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
      danger?: boolean,
      showType: 'when-have-stick' | 'always',
      popConfirm?: {
        onConfirm: (rows?: T[]) => void,
        okText: string,
        cancelText: string,
      },
    }[],
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
        onConfirm: (rows?: T[]) => void,
        okText: string,
        cancelText: string,
      },
    }[],
    paginationOptions?: {
      itemPerPages: { value: number, label: string | React.ReactNode }[],
      maxPageSize: 3 | 4 | 5,
    },
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
    onStick?: (rows: T[]) => void,
  };
}

export const ListMainComponent: <T extends { [key: string]: any }>(props: IListMainComponentProps<T>) => JSX.Element = (props) => {
  const [sticks, setSticks] = React.useState<any[]>([]);
  const [rowFilters, setRowFilter] = React.useState<any[]>(props.input.rows);
  const [pagination, setPagination] = React.useState<{ rows: any[], itemPerPage: number }>({ rows: props.input.rows, itemPerPage: rowFilters.length });
  React.useEffect(() => {
    setRowFilter(props.input.rows);
    setPagination({ rows: props.input.rows, itemPerPage: rowFilters.length });
  }, [props.input.rows]);
  return (
    <>
      <Row className="list-header">
        <ListHeaderComponent input={{ ...props.input, sticks }} output={{ onSearch: setRowFilter }} />
      </Row>
      <Row className="list-render">
        <ListRenderComponent input={{ ...props.input, rows: pagination.rows }} output={{ onStick: setSticks }} />
      </Row>
      <Row className="list-footer">
        <ListFooterComponent input={{ ...props.input, rows: rowFilters }} output={{ onChange: setPagination }} />
      </Row>
    </>
  );
};