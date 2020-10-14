import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-footer.component.css';
import { Button, Col, Row, Select } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { FormGroupVM } from '@view-models';
import { Pagination } from '@material-ui/lab';

export interface IFormFooterComponentProps extends IBaseProps {
  input: {
    rows: FormGroupVM[],
    selected: FormGroupVM | undefined,
    action: 'create' | 'edit' | '',
  };
  output: {
    onChange: (data: { rows: FormGroupVM[], itemPerPage: number }) => void,
  };
}

export const FormFooterComponent: React.FC<IFormFooterComponentProps> = (props: IFormFooterComponentProps) => {
  const [count, setCount] = React.useState<number>(props.input.rows.length);
  const [page, setPage] = React.useState<number>(1);
  const getCount = () => {
    return parseInt((props.input.rows.length / count) + (props.input.rows.length % count > 1 ? 1 : 0) + '', 0);
  };
  React.useEffect(() => {
    props.output.onChange({
      rows: props.input.rows.filter((row, i) => (i <= (count * page) - 1 && i >= ((page - 1) * count))),
      itemPerPage: count,
    });
  }, [count, page, props.input.rows]);

  React.useEffect(() => {
    setCount(props.input.rows.length);
  }, [props.input.rows]);
  return (
    <Row className="form-footer">
      <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3}>
        <div className="left" />
      </Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
        <div className="middle">
          <Pagination disabled={props.input.selected !== undefined || props.input.action === 'create' || props.input.action === 'edit'} count={getCount()} color="primary" variant="outlined" showFirstButton={true} showLastButton={true} onChange={(e, p) => setPage(p)} />
        </div>
      </Col>
      <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3}>
        <div className="right">
          <Select disabled={props.input.selected !== undefined || props.input.action === 'create' || props.input.action === 'edit'} style={{ width: '80%' }} value={count} onChange={(value) => {
            setCount(value);
            setPage(1);
          }}>
            <Select.Option value={5}>5</Select.Option>
            <Select.Option value={10}>10</Select.Option>
            <Select.Option value={20}>20</Select.Option>
            <Select.Option value={100}>100</Select.Option>
            <Select.Option value={props.input.rows.length}>All</Select.Option>
          </Select>
        </div>
      </Col>
    </Row>
  );
};