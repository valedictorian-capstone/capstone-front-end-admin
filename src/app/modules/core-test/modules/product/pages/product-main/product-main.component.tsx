import { IBaseProps } from '@extras/interfaces';
import { useProductAction, useExtraInformationAction } from '@stores/actions';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ProductListComponent, ProductSupportComponent, ProductFooterComponent, ProductHelperComponent, ProductExtraComponent } from '../../components';
import './product-main.component.css';
import { ExtraInformationVM, ProductVM } from '@view-models';
import { RootState } from '@stores/states';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export interface IProductMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const ProductMainComponent: React.FC<IProductMainComponentProps> = (props: IProductMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, ProductVM[]>((state) => state.product.arr);
  const extraInformations = useSelector<RootState, ExtraInformationVM[]>((state) => state.extraInformation.arr.sort((a, b) => (a.position - b.position)));
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<ProductVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: ProductVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<ProductVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | 'setting' | ''>('');
  React.useEffect(() => {
    dispatch(useProductAction().getAll());
    dispatch(useExtraInformationAction().getAll('product'));
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Row className="product-container">
        <Col xs={0} sm={0} md={0} lg={action === 'setting' ? 4 : 0} xl={action === 'setting' ? 4 : 0} xxl={action === 'setting' ? 4 : 0} className="product-helper">
          <ProductHelperComponent input={{}} output={{}} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={action === 'setting' ? 20 : 24} xl={action === 'setting' ? 20 : 24} xxl={action === 'setting' ? 20 : 24} className="product-content">
          <ProductSupportComponent input={{ action, rows }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter, onSetting: () => setAction('setting') }} />
          {action !== 'setting' && <ProductListComponent input={{ rows: pagination.rows, action, extraInformations }} output={{ onSelect: setSelected, onActionChange: setAction }} />}
          {action === 'setting' && <ProductExtraComponent input={{ action, extraInformations }} output={{
            onDone: () => {
              setAction('');
              setUpdated(new Date());
          } }} />}
          {action !== 'setting' && <ProductFooterComponent input={{ rows: rowFilters, selected, action }} output={{ onChange: setPagination }} />}
        </Col>
      </Row>
    </DndProvider>
  );
};