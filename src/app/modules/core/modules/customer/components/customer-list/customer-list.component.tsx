import { CheckCircleOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, MinusCircleOutlined, PlusCircleFilled, PlusOutlined, SettingOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useCustomerAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { CustomerUM, CustomerVM } from '@view-models';
import { Button, Card, Checkbox, Col, Input, List, Pagination, Popconfirm, Popover, Row, Select, Tag, Tooltip } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerCreateComponent, CustomerDetailComponent } from '..';
import './customer-list.component.css';
export interface ICustomerListComponentProps extends IBaseProps {
  input: {
  };
  output: {
    onSetting: () => void,
  };
}

export const CustomerListComponent: React.FC<ICustomerListComponentProps> = (props: ICustomerListComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.customer.components['customer-list'][region];
  const arr = useSelector<RootState, CustomerVM[]>((state) => state.customer.arr);
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<CustomerVM>();
  const [createWithSearch, setCreateWithSearch] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<number>(-1);
  const [itemSize, setItemSize] = React.useState<number>(10);
  const [pageIndex, setPageIndex] = React.useState<number>(1);
  const [rowFilter, setRowFilter] = React.useState<CustomerVM[]>(arr.sort());
  const [conditionSort, setConditionSort] = React.useState<{ sortBy: 'code' | 'fullname' | 'email' | 'phone', value: 'desc' | 'asc' }>({ sortBy: 'code', value: 'desc' });
  const [search, setSearch] = React.useState<{
    fullname: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' },
    code: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' },
    email: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' },
    phone: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' },
    active: string[],
  }>({
    fullname: {
      value: '',
      regex: 'contains',
      sort: 'desc',
    },
    code: {
      value: '',
      regex: 'contains',
      sort: 'desc',
    },
    email: {
      value: '',
      regex: 'contains',
      sort: 'desc',
    },
    phone: {
      value: '',
      regex: 'contains',
      sort: 'desc',
    },
    active: ['true', 'false'],
  });
  const [ids, setIds] = React.useState<string[]>([]);
  const useSearch = (source: string, target: string, regex: 'eq' | 'contains' | 'not-contains' | 'not-eq'): boolean => {
    switch (regex) {
      case 'eq':
        return source === target;
      case 'contains':
        return source.toLowerCase().includes(target.toLowerCase());
      case 'not-contains':
        return !source.toLowerCase().includes(target.toLowerCase());
      case 'not-eq':
        return source !== target;
      default:
        return false;
    }
  };
  React.useEffect(() => {
    dispatch(useCustomerAction().getAll());
  }, []);
  React.useEffect(() => {
    setRowFilter(arr.filter((item) => (
      useSearch(item.fullname, search.fullname.value, search.fullname.regex)
      && useSearch(item.code, search.code.value, search.code.regex)
      && useSearch(item.email, search.email.value, search.email.regex)
      && useSearch(item.phone, search.phone.value, search.phone.regex)
      && (search.active.length === 0 ? true : search.active.indexOf(item.isDelete + '') > -1)
    )).sort((a, b) => {
      if (conditionSort.value === 'asc') {
        return a[conditionSort.sortBy] > b[conditionSort.sortBy] ? 1 : -1;
      } else {
        return a[conditionSort.sortBy] < b[conditionSort.sortBy] ? 1 : -1;
      }
    }));
    setPageIndex(1);
    setItemSize(10);
    setActive(-1);
    setIds([]);
  }, [search, arr]);
  return (
    <List
      size="large"
      bordered={true}
      header={
        <>
          <CustomerCreateComponent input={{
            code: createWithSearch ? search.code.value : '',
            fullname: createWithSearch ? search.fullname.value : '',
            email: createWithSearch ? search.email.value : '',
            phone: createWithSearch ? search.phone.value : '',
            visible,
          }} output={{
            onCreate: (form) => {
              dispatch(useCustomerAction().create({ ...form }));
            },
            onClose: (() => setVisible(false)),
          }} />
          <CustomerDetailComponent input={{
            data: selected,
          }} output={{
            onUpdate: (form) => {
              dispatch(useCustomerAction().update({ ...form }));
            },
            onClose: (() => setSelected(undefined)),
          }} />
          <Row style={{ width: '100%', height: '33%', borderTop: '1px solid gray', borderLeft: '1px solid gray', borderRight: '1px solid gray', background: 'moccasin' }}>
            <Col span={10} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10 }}>
                <Tooltip placement="top" title={config.buttons.create.tooltip}>
                  <Button size="small" className="setting" style={{ marginRight: 5 }} onClick={() => { setVisible(true); }} shape={'circle'} icon={<PlusOutlined />} />
                </Tooltip>
                <Tooltip placement="top" title={config.buttons['export-excel'].tooltip}>
                  <Button size="small" className="setting" style={{ marginRight: 5 }} shape={'circle'} icon={<DownloadOutlined />} />
                </Tooltip>
                <Tooltip placement="top" title={config.buttons['import-excel'].tooltip}>
                  <Button size="small" className="setting" style={{ marginRight: 5 }} shape={'circle'} icon={<FileExcelOutlined />} />
                </Tooltip>
                {ids.length > 0 && (
                  <>
                    <Popconfirm
                      title={config.buttons.active.confirm}
                      placement="top"
                      onConfirm={() => {
                        dispatch(useCustomerAction().active(ids));
                        setIds([]);
                      }}
                      okText={config.buttons.active.yes}
                      cancelText={config.buttons.active.no}
                    >
                      <Tooltip placement="top" title={config.buttons.active.tooltip}>
                        <Button shape="circle" size="small" style={{ marginRight: 5 }} className="setting"><CheckCircleOutlined /></Button>
                      </Tooltip>
                    </Popconfirm>
                    <Popconfirm
                      title={config.buttons.deactive.confirm}
                      placement="top"
                      onConfirm={() => {
                        dispatch(useCustomerAction().deactive(ids));
                        setIds([]);
                      }}
                      okText={config.buttons.deactive.yes}
                      cancelText={config.buttons.deactive.no}
                    >
                      <Tooltip placement="top" title={config.buttons.deactive.tooltip}>
                        <Button size="small" className="setting" style={{ marginRight: 5 }} shape="circle" danger={true} icon={<MinusCircleOutlined />} />
                      </Tooltip>
                    </Popconfirm>

                  </>
                )}
                <Tooltip placement="top" title={config.buttons['setting'].preview.tooltip}>
                  <Button type="primary" size="small" className="setting" onClick={props.output.onSetting} style={{ marginRight: 5 }} shape={'circle'} icon={<SettingOutlined />} />
                </Tooltip>
              </div>
            </Col>
            <Col span={4} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center', fontWeight: 'bold' }}>
                {config.label}
              </div>
            </Col>
            <Col span={10} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 7 }}>
                <Input.Search
                  placeholder={config.search['global-search']}
                  onSearch={value => console.log(value)}
                  style={{ width: '30%', float: 'right' }}
                />
              </div>
            </Col>
          </Row>
          <Row style={{ width: '100%', height: '33%', borderTop: '1px solid gray', borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
            <Col span={1} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }} />
            </Col>
            <Col span={4} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 7, textAlign: 'center' }}>
                <Input addonBefore={(
                  <Select defaultValue="contains" style={{ width: 100 }} onChange={(value) => setSearch({ ...search, code: { ...search.code, regex: value } })}>
                    <Select.Option value="contains">{config.search.regexs.contains}</Select.Option>
                    <Select.Option value="not-contains">{config.search.regexs['not-contains']}</Select.Option>
                    <Select.Option value="eq">{config.search.regexs.equals}</Select.Option>
                    <Select.Option value="not-eq">{config.search.regexs['not-equals']}</Select.Option>
                  </Select>
                )} addonAfter={(
                  <Button size="small" shape="circle" onClick={() => {
                    setSearch({ ...search, code: { ...search.code, sort: search.code.sort === 'asc' ? 'desc' : 'asc' } });
                    setConditionSort({ sortBy: 'code', value: search.code.sort });
                  }} icon={search.code.sort === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />} />
                )} style={{ width: '100%' }} placeholder={config.search.fields.code} onChange={(e) => setSearch({ ...search, code: { ...search.code, value: e.target.value } })} />
              </div>
            </Col>
            <Col span={5} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 7, textAlign: 'center' }}>
                <Input addonBefore={(
                  <Select defaultValue="contains" style={{ width: 100 }} onChange={(value) => setSearch({ ...search, fullname: { ...search.fullname, regex: value } })}>
                    <Select.Option value="contains">{config.search.regexs.contains}</Select.Option>
                    <Select.Option value="not-contains">{config.search.regexs['not-contains']}</Select.Option>
                    <Select.Option value="eq">{config.search.regexs.equals}</Select.Option>
                    <Select.Option value="not-eq">{config.search.regexs['not-equals']}</Select.Option>
                  </Select>
                )} addonAfter={(
                  <Button size="small" shape="circle" onClick={() => {
                    setSearch({ ...search, fullname: { ...search.fullname, sort: search.fullname.sort === 'asc' ? 'desc' : 'asc' } });
                    setConditionSort({ sortBy: 'fullname', value: search.fullname.sort });
                  }} icon={search.fullname.sort === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />} />
                )} style={{ width: '100%' }} placeholder={config.search.fields.fullname} onChange={(e) => setSearch({ ...search, fullname: { ...search.fullname, value: e.target.value } })} />
              </div>
            </Col>
            <Col span={5} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 7, textAlign: 'center' }}>
                <Input addonBefore={(
                  <Select defaultValue="contains" style={{ width: 100 }} onChange={(value) => setSearch({ ...search, email: { ...search.email, regex: value } })}>
                    <Select.Option value="contains">{config.search.regexs.contains}</Select.Option>
                    <Select.Option value="not-contains">{config.search.regexs['not-contains']}</Select.Option>
                    <Select.Option value="eq">{config.search.regexs.equals}</Select.Option>
                    <Select.Option value="not-eq">{config.search.regexs['not-equals']}</Select.Option>
                  </Select>
                )} addonAfter={(
                  <Button size="small" shape="circle" onClick={() => {
                    setSearch({ ...search, email: { ...search.email, sort: search.email.sort === 'asc' ? 'desc' : 'asc' } });
                    setConditionSort({ sortBy: 'email', value: search.email.sort });
                  }} icon={search.email.sort === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />} />
                )} style={{ width: '100%' }} placeholder={config.search.fields.email} onChange={(e) => setSearch({ ...search, email: { ...search.email, value: e.target.value } })} />
              </div>
            </Col>
            <Col span={4} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 7, textAlign: 'center' }}>
                <Input addonBefore={(
                  <Select defaultValue="contains" style={{ width: 100 }} onChange={(value) => setSearch({ ...search, phone: { ...search.phone, regex: value } })}>
                    <Select.Option value="contains">{config.search.regexs.contains}</Select.Option>
                    <Select.Option value="not-contains">{config.search.regexs['not-contains']}</Select.Option>
                    <Select.Option value="eq">{config.search.regexs.equals}</Select.Option>
                    <Select.Option value="not-eq">{config.search.regexs['not-equals']}</Select.Option>
                  </Select>
                )} addonAfter={(
                  <Button size="small" shape="circle" onClick={() => {
                    setSearch({ ...search, phone: { ...search.phone, sort: search.phone.sort === 'asc' ? 'desc' : 'asc' } });
                    setConditionSort({ sortBy: 'phone', value: search.phone.sort });
                  }} icon={search.phone.sort === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />} />
                )} style={{ width: '100%' }} placeholder={config.search.fields.phone} onChange={(e) => setSearch({ ...search, phone: { ...search.phone, value: e.target.value } })} />
              </div>
            </Col>
            <Col span={4} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10, textAlign: 'center', borderRight: '1px solid gray' }}>
                <Select mode="multiple" defaultValue={['false', 'true']} style={{ width: '100%' }} onChange={(value) => setSearch({ ...search, active: value })} >
                  <Select.Option value="false">
                    <span style={{ display: 'block', textAlign: 'center' }}>
                      <Tag icon={<CheckCircleOutlined />} color="success">
                        {config.search.fields.status.active}
                      </Tag>
                    </span>
                  </Select.Option>
                  <Select.Option value="true">
                    <span style={{ display: 'block', textAlign: 'center' }}>
                      <Tag icon={<MinusCircleOutlined />} color="error">
                        {config.search.fields.status.deactive}
                      </Tag>
                    </span>
                  </Select.Option>
                </Select>
              </div>
            </Col>
            <Col span={1} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10, textAlign: 'center' }} />
            </Col>
          </Row>
          <Row style={{ width: '100%', height: '33%', borderTop: '1px solid gray', borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
            <Col span={1} style={{ height: 50 }}>
              {rowFilter.length > 0 && <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                <Checkbox checked={ids.length === rowFilter.length} onChange={(e) => {
                  setIds(e.target.checked ? rowFilter.map((row) => row.id) : []);
                }}
                  indeterminate={ids.length > 0 && ids.length < rowFilter.length}
                />
              </div>}
            </Col>
            <Col span={4} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {config.col.code}
              </div>
            </Col>
            <Col span={5} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {config.col.fullname}
              </div>
            </Col>
            <Col span={5} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {config.col.email}
              </div>
            </Col>
            <Col span={4} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {config.col.phone}
              </div>
            </Col>
            <Col span={4} style={{ height: 50, borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 10, textAlign: 'center' }} >
                {config.col.status}
              </div>
            </Col>
            <Col span={1} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10, textAlign: 'center' }}>
                {config.col.action}
              </div>
            </Col>
          </Row>
        </>
      }
      style={{ height: window.innerHeight - 140 }}

      footer={
        < Row style={{ width: '100%', height: '100%', borderBottom: '1px solid gray', borderLeft: '1px solid gray', borderRight: '1px solid gray', background: 'moccasin' }}>
          <Col span={6} style={{ height: '100%' }}>
            <div style={{ alignSelf: 'center', padding: 8 }}>
              <Input readOnly={true} disabled={true} style={{ width: '80%', textAlign: 'center', fontWeight: 900 }} value={`Show ${(((pageIndex - 1) * itemSize) + 1)} to ${(pageIndex * itemSize) > rowFilter.length ? rowFilter.length : (pageIndex * itemSize)} of ${rowFilter.length} recoirds`} />
            </div>
          </Col>
          <Col span={12} style={{ height: '100%' }}>
            <div style={{ alignSelf: 'center', padding: 8, textAlign: 'center' }}>
              <Pagination defaultCurrent={pageIndex} onChange={(page) => setPageIndex(page)} pageSize={itemSize} total={rowFilter.length} />
            </div>
          </Col>
          <Col span={6} style={{ height: '100%' }}>
            <div style={{ alignSelf: 'center', padding: 8 }}>
              <Select defaultValue={itemSize} style={{ width: 120, float: 'right' }} onChange={(value) => setItemSize(value)}>
                <Select.Option value="10">10</Select.Option>
                <Select.Option value="20">20</Select.Option>
                <Select.Option value="50">50</Select.Option>
                <Select.Option value="100">100</Select.Option>
                <Select.Option value={rowFilter.length}>{config.paging.all}</Select.Option>
              </Select>
            </div>
          </Col>
        </Row >
      }
      dataSource={rowFilter}
      renderItem={(item: CustomerVM, i) => (i >= (((pageIndex - 1) * itemSize)) && i <= (pageIndex * itemSize) - 1) && (
        <List.Item className={'item' + (active === i ? ' active' : '')} style={{ padding: 0, borderBottom: '1px solid gray' }} onClick={() => {
          setActive(i);
          // props.output?.onSelectItem(item);
        }}>
          <Row style={{ width: '100%' }}>
            <Col span={1} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                <Checkbox checked={ids.findIndex(e => e === item.id) > -1} onChange={(e) => {
                  if (e.target.checked) {
                    setIds([...ids, item.id]);
                  } else {
                    setIds(ids.filter((id) => id !== item.id));
                  }
                }} />
              </div>
            </Col>
            <Col span={4} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.code}
              </div>
            </Col>
            <Col span={5} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.fullname}
              </div>
            </Col>
            <Col span={5} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.email}
              </div>
            </Col>
            <Col span={4} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.phone}
              </div>
            </Col>
            <Col span={4} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.isDelete ?
                  <Tag icon={<MinusCircleOutlined />} color="error">
                    {config.search.fields.status.deactive}
                  </Tag> :
                  <Tag icon={<CheckCircleOutlined />} color="success">
                    {config.search.fields.status.active}
                  </Tag>
                }
              </div>
            </Col>
            <Col span={1} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10, textAlign: 'center' }}>
                <Popover placement="left" trigger="hover" content={
                  <>
                    <Tooltip placement="top" title={config.buttons.setting.edit.tooltip}>
                      <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting" onClick={() => setSelected(item)} ><EditOutlined /></Button>
                    </Tooltip>
                    <Popconfirm
                      title={config.buttons.setting.active.confirm}
                      placement="top"
                      onConfirm={() => {
                        dispatch(useCustomerAction().active([item.id]));
                      }}
                      okText={config.buttons.setting.active.yes}
                      cancelText={config.buttons.setting.active.no}
                    >
                      <Tooltip placement="top" title={config.buttons.setting.active.tooltip}>
                        <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><CheckCircleOutlined /></Button>
                      </Tooltip>
                    </Popconfirm>
                    <Popconfirm
                      title={config.buttons.setting.deactive.confirm}
                      placement="top"
                      onConfirm={() => {
                        dispatch(useCustomerAction().deactive([item.id]));
                      }}
                      okText={config.buttons.setting.deactive.yes}
                      cancelText={config.buttons.setting.deactive.no}
                    >
                      <Tooltip placement="top" title={config.buttons.setting.deactive.tooltip}>
                        <Button size="small" className="setting" style={{ marginRight: 10 }} shape="circle" danger={true} icon={<MinusCircleOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                  </>
                }>
                  <Button shape="circle" className="setting"><SettingOutlined /></Button>
                </Popover>
              </div>
            </Col>
          </Row>
        </List.Item >
      )}
    >
      <div style={{ display: rowFilter.length === 0 ? 'block' : 'none', width: '100%', height: '100%' }}>
        <div className="centered">
          <Card title={<span style={{ display: 'block', textAlign: 'center' }}>{config['empty-message']}</span>} style={{ width: 600 }}>
            <span style={{ display: 'block', textAlign: 'center', marginTop: 10 }}><Button type="primary" shape={'round'} onClick={() => {
              setCreateWithSearch(true);
              setVisible(true);
            }} ><PlusCircleFilled /> {config.buttons['create-with-search']}</Button></span>
          </Card>
        </div>
      </div>
    </List >
  );
};