import { IBaseProps } from '@extras/interfaces';
import { useFormGroupAction } from '@stores/actions';
import { Button, Checkbox, Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormListComponent, FormSupportComponent, FormFooterComponent, FormHelperComponent } from '../../components';
import './form-main.component.css';
import { FormGroupVM } from '@view-models';
import { RootState } from '@stores/states';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MoreHorizOutlined, PagesOutlined } from '@material-ui/icons';
import { Pagination } from '@material-ui/lab';
export interface IFormMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormMainComponent: React.FC<IFormMainComponentProps> = (props: IFormMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, FormGroupVM[]>((state) => state.formGroup.arr);
  const [rowFilters, setRowFilter] = React.useState<FormGroupVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: FormGroupVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<FormGroupVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>('');
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [transform, setTransform] = React.useState<'create' | 'search' | 'paging' | 'select' | 'update' | ''>('');
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Row className="form-container">
        <Col xs={action === 'create' ? 24 : 0} sm={action === 'create' ? 24 : 0} md={action === 'create' ? 24 : 0} lg={action === 'create' ? 12 : 0} xl={action === 'create' ? 12 : 0} xxl={action === 'create' ? 12 : 0}>
          <span />
        </Col>
        <Col xs={action === 'edit' ? 24 : 0} sm={action === 'edit' ? 24 : 0} md={action === 'edit' ? 24 : 0} lg={action === 'edit' ? 12 : 0} xl={action === 'edit' ? 12 : 0} xxl={action === 'edit' ? 12 : 0}>
          <span />
        </Col>
        <Col xs={action === '' ? 24 : 0} sm={action === '' ? 24 : 0} md={action === '' ? 24 : 0} lg={action === '' ? 24 : 12} xl={action === '' ? 24 : 12} xxl={action === '' ? 24 : 12}>
          <FormListComponent input={{ rows: pagination.rows, action, transform }} output={{ onSelect: setSelected, onActionChange: setAction, onTransform: setTransform }} />
        </Col>
        {/* <Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={4} className="form-helper">
          <FormHelperComponent input={{}} output={{}} />
        </Col> */}
      </Row>
      <FormSupportComponent input={{ action, rows, transform }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter, onTransform: setTransform }} />
      <FormFooterComponent input={{ rows: rowFilters, selected, action, transform }} output={{ onPaging: setPagination, onTransform: setTransform }} />
    </DndProvider>
  );
};