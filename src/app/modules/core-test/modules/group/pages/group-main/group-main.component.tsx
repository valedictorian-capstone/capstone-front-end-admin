import { IBaseProps } from '@extras/interfaces';
import { useGroupAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { GroupVM } from '@view-models';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GroupFooterComponent, GroupListComponent, GroupSupportComponent } from '../../components';
import './group-main.component.css';
export interface IGroupMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const GroupMainComponent: React.FC<IGroupMainComponentProps> = (props: IGroupMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, GroupVM[]>((state) => state.group.arr);
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<GroupVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: GroupVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<GroupVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>('');
  React.useEffect(() => {
    dispatch(useGroupAction().getAll());
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <Row className="group-container">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="group-content">
        <GroupSupportComponent input={{ action, rows }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter }} />
        <GroupListComponent input={{ rows: pagination.rows, action }} output={{ onSelect: setSelected, onActionChange: setAction }} />
        <GroupFooterComponent input={{ rows: rowFilters, selected, action }} output={{ onChange: setPagination }} />
      </Col>
    </Row>
  );
};