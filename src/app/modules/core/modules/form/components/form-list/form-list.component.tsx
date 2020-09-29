import { DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, MinusCircleOutlined, PlusCircleFilled, PlusOutlined, RestOutlined, SettingOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { FormGroupCM, FormGroupUM, FormGroupVM } from '@view-models';
import { Button, Card, Checkbox, Col, Input, List, Pagination, Popover, Row, Select, Tooltip } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import './form-list.component.css';
import { useFormGroupAction } from '@stores/actions';
export interface IFormListComponentProps extends IBaseProps {
  input: {
  };
  output: {
    onSelectItem: (data: FormGroupUM) => void,
    onCreate: (data: FormGroupCM) => void,
  };
}

export const FormListComponent = (props: IFormListComponentProps) => {
  const arr = useSelector<RootState, FormGroupVM[]>((state) => state.formGroup.arr);
  const dispatch = useDispatch();
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const [active, setActive] = React.useState<number>(-1);
  const [itemSize, setItemSize] = React.useState<number>(10);
  const [pageIndex, setPageIndex] = React.useState<number>(1);
  const [rowFilter, setRowFilter] = React.useState<FormGroupVM[]>(arr.sort());
  const [conditionSort, setConditionSort] = React.useState<{ sortBy: 'code' | 'name', value: 'desc' | 'asc' }>({ sortBy: 'code', value: 'desc' });
  const [search, setSearch] = React.useState<{ name: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' }, code: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' } }>({
    name: {
      value: '',
      regex: 'contains',
      sort: 'desc',
    },
    code: {
      value: '',
      regex: 'contains',
      sort: 'desc',
    },
  });
  const useSearch = (source: string, target: string, regex: 'eq' | 'contains' | 'not-contains' | 'not-eq'): boolean => {
    console.log(arr);
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
  const [ids, setIds] = React.useState<string[]>([]);
  const config = environment.i18n[region].data['form'];
  React.useEffect(() => {
    dispatch(useFormGroupAction().getAll());
  }, []);
  React.useEffect(() => {

    // useSearch(item.code, search.code.value, search.code.regex)
    setRowFilter(arr.filter((item) => (useSearch(item.name, search.name.value, search.name.regex) && useSearch(item.code, search.code.value, search.code.regex))).sort((a, b) => {
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
          <Row style={{ width: '100%', height: '33%', borderTop: '1px solid gray', borderLeft: '1px solid gray', borderRight: '1px solid gray', background: 'moccasin' }}>
            <Col span={10} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10 }}>
                <Tooltip placement="top" title="Add new form">
                  <Button size="small" className="setting" style={{ marginRight: 5 }} onClick={() => props.output.onCreate({ id: uuid(), code: '', name: '', description: '', formControls: [] })} shape={'circle'} icon={<PlusOutlined />} />
                </Tooltip>
                <Tooltip placement="top" title="Export excel">
                  <Button size="small" className="setting" style={{ marginRight: 5 }} shape={'circle'} icon={<DownloadOutlined />} />
                </Tooltip>
                <Tooltip placement="top" title="Import excel">
                  <Button size="small" className="setting" style={{ marginRight: 5 }} shape={'circle'} icon={<FileExcelOutlined />} />
                </Tooltip>
                {ids.length > 0 && (
                  <>
                    <Tooltip placement="top" title="Deactive">
                      <Button size="small" className="setting" style={{ marginRight: 5 }} shape="circle" danger={true} icon={<MinusCircleOutlined />} />
                    </Tooltip>
                    <Tooltip placement="top" title="Remove form">
                      <Button shape="circle" size="small" danger={true} className="setting"><RestOutlined /></Button>
                    </Tooltip>
                  </>
                )}
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
                  placeholder="input search text"
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
            <Col span={11} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 7, textAlign: 'center' }}>
                <Input.Search addonBefore={(
                  <Select defaultValue="contains" style={{ width: 120 }} onChange={(value) => setSearch({ ...search, code: { ...search.code, regex: value } })}>
                    <Select.Option value="contains">Contains</Select.Option>
                    <Select.Option value="not-contains">Not Contains</Select.Option>
                    <Select.Option value="eq">Equals</Select.Option>
                    <Select.Option value="not-eq">Not Equals</Select.Option>
                  </Select>
                )} addonAfter={(
                  <Button size="small" shape="circle" onClick={() => {
                    setSearch({ ...search, code: { ...search.code, sort: search.code.sort === 'asc' ? 'desc' : 'asc' } });
                    setConditionSort({ sortBy: 'code', value: search.code.sort });
                  }} icon={search.code.sort === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />} />
                )} style={{ width: '100%' }} placeholder="Search by code" onSearch={(value) => setSearch({ ...search, code: { ...search.code, value } })} />
              </div>
            </Col>
            <Col span={11} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 7, textAlign: 'center' }}>
                <Input.Search addonBefore={(
                  <Select defaultValue="contains" style={{ width: 120 }} onChange={(value) => setSearch({ ...search, name: { ...search.name, regex: value } })}>
                    <Select.Option value="contains">Contains</Select.Option>
                    <Select.Option value="not-contains">Not Contains</Select.Option>
                    <Select.Option value="eq">Equals</Select.Option>
                    <Select.Option value="not-eq">Not Equals</Select.Option>
                  </Select>
                )} addonAfter={(
                  <Button size="small" shape="circle" onClick={() => {
                    setSearch({ ...search, name: { ...search.name, sort: search.name.sort === 'asc' ? 'desc' : 'asc' } });
                    setConditionSort({ sortBy: 'name', value: search.name.sort });
                  }} icon={search.name.sort === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />} />
                )} style={{ width: '100%' }} placeholder="Search by name" onSearch={(value) => setSearch({ ...search, name: { ...search.name, value } })} />
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
            <Col span={11} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                Code
              </div>
            </Col>
            <Col span={11} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                Name
              </div>
            </Col>
            <Col span={1} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10, textAlign: 'center' }}>
                Action
              </div>
            </Col>
          </Row>
        </>
      }
      style={{ height: window.innerHeight - 140 }}

      footer={
        <Row style={{ width: '100%', height: '100%', borderBottom: '1px solid gray', borderLeft: '1px solid gray', borderRight: '1px solid gray', background: 'moccasin' }}>
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
                <Select.Option value={rowFilter.length}>All</Select.Option>
              </Select>
            </div>
          </Col>
        </Row>
      }
      dataSource={rowFilter}
      renderItem={(item: FormGroupVM, i) => (i >= (((pageIndex - 1) * itemSize)) && i <= (pageIndex * itemSize) - 1) && (
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
            <Col span={11} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.code}
              </div>
            </Col>
            <Col span={11} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.name}
              </div>
            </Col>
            <Col span={1} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 10, textAlign: 'center' }}>
                <Popover placement="left" trigger="hover" content={
                  <>
                    <Tooltip placement="top" title="Edit form">
                      <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting" onClick={() => props.output.onSelectItem(item)} ><EditOutlined /></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Preview form">
                      <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting" onClick={() => props.output.onSelectItem(item)} ><EyeOutlined /></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Deactive form">
                      <Button shape="circle" size="small" danger={true} className="setting"><MinusCircleOutlined /></Button>
                    </Tooltip>
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
          <Card title={<span style={{ display: 'block', textAlign: 'center' }}>No record found</span>} style={{ width: 600 }}>
            <Card title={<span style={{ display: 'block', textAlign: 'center' }}>Do you want to create new form with search data ?</span>} style={{ width: 500, margin: 'auto' }}>
              <label>Name:</label><br />
              <Input value={search.name.value} readOnly={true} />
              <label>Code:</label><br />
              <Input value={search.code.value} readOnly={true} />
            </Card>
            <span style={{ display: 'block', textAlign: 'center', marginTop: 10 }}><Button type="primary" shape={'round'} onClick={() => props.output.onCreate({ id: uuid(), code: search.code.value, name: search.name.value, description: '', formControls: [] })} ><PlusCircleFilled /> Create new form</Button></span>
          </Card>
        </div>

      </div>
    </List >
  );
};