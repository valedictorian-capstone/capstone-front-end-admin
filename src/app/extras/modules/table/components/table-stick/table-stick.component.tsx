import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './table-stick.component.css';
import { Checkbox } from 'antd';

export interface ITableStickComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    rows: T[],
    rowHeight: string | number,
  };
  output: {
    onStick?: (rows: T[]) => void,
  };
}

export const TableStickComponent: <T extends { [key: string]: any }>(props: ITableStickComponentProps<T>) => JSX.Element = ({
  input = {
    rows: [],
    rowHeight: '4rem',
  },
  output = {
    onStick: ([]) => { },
  },
}) => {
  console.log(input);
  const [rows, setRows] = React.useState<typeof input.rows>([]);
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr style={{ height: '3rem', textAlign: 'center' }}>
          <th />
        </tr>
        <tr style={{ height: '3rem', textAlign: 'center' }}>
          <th>
            <Checkbox checked={rows.length === input.rows.length} indeterminate={rows.length > 0 && rows.length < input.rows.length} onChange={(e) => {
              if (e.target.checked) {
                setRows(input.rows);
              } else {
                setRows([]);
              }
              output.onStick ? output.onStick(rows) : (() => { })();
            }} />
          </th>
        </tr>
      </thead>
      <tbody>
        {input.rows.map((row, i) => (
          <tr key={i} style={{ height: '3rem', textAlign: 'center' }}>
            <td>
              <Checkbox checked={rows.findIndex(e => e.id === row.id) > -1} onChange={(e) => {
                if (e.target.checked) {
                  setRows([...rows, row]);
                } else {
                  setRows(rows.filter((c) => c.id !== row.id));
                }
                output.onStick ? output.onStick(rows) : (() => { })();
              }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};