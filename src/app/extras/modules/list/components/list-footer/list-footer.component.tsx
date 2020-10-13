import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './list-footer.component.css';
import { Button, Col, Select } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export interface IListFooterComponentProps<T extends { [key: string]: any }> extends IBaseProps {
  input: {
    rows: T[],
    paginationOptions?: {
      itemPerPages: { value: number, label: string | React.ReactNode }[],
      maxPageSize: 3 | 4 | 5,
    },
  };
  output: {
    onChange?: (data: { rows: T[], itemPerPage: number }) => void,
  };
}

export const ListFooterComponent: <T extends { [key: string]: any }>(props: IListFooterComponentProps<T>) => JSX.Element = (props) => {
  const [count, setCount] = React.useState<number>(-1);
  const [page, setPage] = React.useState<number>(1);
  const getCount = () => {
    return parseInt((props.input.rows.length / count) + (props.input.rows.length % count > 1 ? 1 : 0) + '', 0);
  };
  const getMax = () => {
    return getCount() > (props.input.paginationOptions?.maxPageSize || 3) ? (props.input.paginationOptions?.maxPageSize || 3) : getCount();
  };
  const getMin = () => {
    return 1;
  };
  const [pagination, setPagination] = React.useState<{ min: number, max: number }>({ min: getMin(), max: getMax() });
  React.useEffect(() => {
    props.output.onChange ? props.output.onChange({
      rows: count === -1 ? props.input.rows : props.input.rows.filter((row, i) => (i <= (count * page) - 1 && i >= ((page - 1) * count))),
      itemPerPage: count === -1 ? props.input.rows.length : count,
    }) : (() => { })();
    setPagination({ min: getMin(), max: getMax() });
  }, [count, page, props.input.rows]);
  const getPages = () => {
    if (count === -1 || count >= props.input.rows.length) {
      return <Button style={{marginLeft: 5, marginRight: 5}} className="list-footer-button-active" type="default" size="middle" onClick={() => index(1)}>1</Button>;
    } else {
      const buttons = [];
      for (let i = pagination.min; i <= pagination.max; i++) {
        buttons.push(<Button key={i} style={{marginLeft: 5, marginRight: 5}} className={page === i ? 'list-footer-button-active' : ''} type="default" size="middle" onClick={() => index(i)}>{i}</Button>);
      }
      return buttons.map((e) => e);
    }
  };
  const next = () => {
    if (page < pagination.max) {
      setPage(page + 1);
    } else {
      if (pagination.max < getCount()) {
        setPage(page + 1);
        setPagination({ min: pagination.min + 1, max: pagination.max + 1 });
      }
    }
  };
  const previous = () => {
    if (page > pagination.min) {
      setPage(page - 1);
    } else {
      if (pagination.min > getMin()) {
        setPage(page - 1);
        setPagination({ min: pagination.min - 1, max: pagination.max - 1 });
      }
    }
  };
  const first = () => {
    if (page !== getMin()) {
      setPage(getMin());
    }

  };
  const last = () => {
    if (page !== getCount()) {
      setPage(getCount());
    }
  };
  const index = (_page: number) => {
    if (_page !== page) {
      setPage(_page);
    }
  };
  return <>
    <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3} className="list-footer-left">
      <span />
    </Col>
    <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18} className="list-footer-middle">
      <Button style={{marginLeft: 5, marginRight: 5}} type="default" size="middle" onClick={first} icon={<DoubleLeftOutlined />} />
      <Button style={{marginLeft: 5, marginRight: 5}} type="default" size="middle" onClick={previous} icon={<LeftOutlined />} />
      {getPages()}
      <Button style={{marginLeft: 5, marginRight: 5}} type="default" size="middle" onClick={next} icon={<RightOutlined />} />
      <Button style={{marginLeft: 5, marginRight: 5}} type="default" size="middle" onClick={last} icon={<DoubleRightOutlined />} />
    </Col>
    <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3} className="list-footer-right">
      <Select style={{ width: '80%' }} value={count} onChange={(value) => setCount(value)}>
        {props.input.paginationOptions?.itemPerPages.map((op) => (
          <Select.Option key={op.value} value={op.value}>{op.label}</Select.Option>
        ))}
        <Select.Option value={-1}>All</Select.Option>
      </Select>
    </Col>
  </>;
};