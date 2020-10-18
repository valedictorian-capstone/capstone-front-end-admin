import { IBaseProps } from '@extras/interfaces';
import { Pagination } from '@material-ui/lab';
import { GroupVM } from '@view-models';
import { Col, Row, Select } from 'antd';
import React from 'react';
import './group-footer.component.css';

export interface IGroupFooterComponentProps extends IBaseProps {
  input: {
    rows: GroupVM[],
    selected: GroupVM | undefined,
    action: 'create' | 'edit' | '',
  };
  output: {
    onChange: (data: { rows: GroupVM[], itemPerPage: number }) => void,
  };
}

export const GroupFooterComponent: React.FC<IGroupFooterComponentProps> = (props: IGroupFooterComponentProps) => {
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
    <Row className="group-footer">
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