import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-render.component.css';
import { TableColComponent } from '..';
import { TableRowComponent } from '../table-row/table-row.component';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Button, Input, Select } from 'antd';

export interface ITableRenderComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    rows: T[],
    rowHeight: string | number,
    tableWidth: string | number,
    columns: Array<{
      name: string,
      label: string,
      width: string | number,
      type: 'normal' | 'status',
      search: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' } | string[],
    }>,
  };
  output: {
    onSelect?: (data: T) => void,
  };
}

export const TableRenderComponent: <T extends { [key: string]: any }>(props: ITableRenderComponentProps<T>) => JSX.Element = ({
  input = {
    rows: [],
    columns: [],
    rowHeight: '4rem',
    tableWidth: '100%',
  },
  output = {
    onSelect: (data) => { },
  },
}) => {
  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <table style={{ width: input.tableWidth, minHeight: '100%' }}>
        <thead>
          <tr style={{ height: '3rem', textAlign: 'center' }}>
            {input.columns.map((column, index) => (
              <td key={index}>
                <Input addonBefore={(
                  <Select defaultValue="contains" style={{ width: 120 }}>
                    <Select.Option value="contains">contains</Select.Option>
                    <Select.Option value="not-contains">not-contains</Select.Option>
                    <Select.Option value="eq">eq</Select.Option>
                    <Select.Option value="not-eq">not-eq</Select.Option>
                  </Select>
                )} addonAfter={(
                  <Button size="small" shape="circle" onClick={() => {
                    // setSearch({ ...search, code: { ...search.code, sort: search.code.sort === 'asc' ? 'desc' : 'asc' } });
                    // setConditionSort({ sortBy: 'code', value: search.code.sort });
                  }} icon={<SortAscendingOutlined />} />
                )} style={{ width: '100%' }} placeholder={column.label} />
              </td>
            ))}
          </tr>
          <tr style={{ height: '3rem', textAlign: 'center' }}>
            {input.columns.map((column, index) => (
              <td key={index}>
                <span>{column.label}</span>
                {column.type === 'normal' && <span style={{marginLeft: 10}}>
                    <Button size="small" shape="circle" icon={<SortAscendingOutlined />} />
                  </span>
                }
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {input.rows.map((row, i) => (
            <tr key={i} style={{ height: '3rem', textAlign: 'center' }}>
              {input.columns.map((column, index) => (
                <td key={index}>{row[column.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};