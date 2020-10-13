import { CheckCircleOutlined, DownloadOutlined, EyeOutlined, MinusCircleOutlined, PlusCircleFilled, PlusOutlined, SettingOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useWorkFlowInstanceAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { WorkFlowInstanceVM, WorkFlowUM } from '@view-models';
import { Button, Card, Checkbox, Col, Input, List, Pagination, Popconfirm, Popover, Row, Select, Tag, Tooltip } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProcessCreateComponent } from '..';
import './process-list.component.css';

export interface IProcessListComponentProps extends IBaseProps {
  input: {
    workFlow?: WorkFlowUM,
  };
  output: {
    onSelectItem: (id: string) => void,
  };
}

export const ProcessListComponent: React.FC<IProcessListComponentProps> = (props: IProcessListComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.process.components['process-list'][region];
  const arr = useSelector<RootState, WorkFlowInstanceVM[]>((state) => state.workFlowInstance.arr);
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [onWaiting, setOnWaiting] = React.useState<boolean>(false);
  const [createWithSearch, setCreateWithSearch] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<number>(-1);
  const [itemSize, setItemSize] = React.useState<number>(10);
  const [pageIndex, setPageIndex] = React.useState<number>(1);
  const [rowFilter, setRowFilter] = React.useState<WorkFlowInstanceVM[]>(arr.sort());
  const [conditionSort, setConditionSort] = React.useState<{ sortBy: 'code', value: 'desc' | 'asc' }>({ sortBy: 'code', value: 'desc' });
  const [search, setSearch] = React.useState<{ code: { value: string, sort: 'desc' | 'asc', regex: 'eq' | 'contains' | 'not-contains' | 'not-eq' }, active: string[] }>({
    code: {
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
    dispatch(useWorkFlowInstanceAction().getAll());
  }, [props.input.workFlow]);
  React.useEffect(() => {
    // useSearch(item.code, search.code.value, search.code.regex)
    if (onWaiting) {
      props.output.onSelectItem(arr[arr.length - 1].id);
    }
    setRowFilter(arr.filter((item) => (
      useSearch(item.code, search.code.value, search.code.regex)
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
          <ProcessCreateComponent input={{
            code: createWithSearch ? search.code.value : '',
            visible,
          }} output={{
            onCreate: (proccess, edit) => {
              dispatch(useWorkFlowInstanceAction().create({...proccess, workFlowId: props.input.workFlow?.id}));
              setOnWaiting(edit);
            },
            onClose: (() => setVisible(false)),
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
                {ids.length > 0 && (
                  <>
                    <Popconfirm
                      title={config.buttons.active.confirm}
                      placement="top"
                      onConfirm={() => {
                        dispatch(useWorkFlowInstanceAction().active(ids));
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
                        dispatch(useWorkFlowInstanceAction().deactive(ids));
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
                  placeholder={config.search['global-search'].label}
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
            <Col span={15} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 7, textAlign: 'center' }}>
                <Input addonBefore={(
                  <Select defaultValue="contains" style={{ width: 120 }} onChange={(value) => setSearch({ ...search, code: { ...search.code, regex: value } })}>
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
            <Col span={6} style={{ height: 50 }}>
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
            <Col span={2} style={{ height: 50 }}>
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
            <Col span={15} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {config.col.code}
              </div>
            </Col>
            <Col span={6} style={{ height: 50, borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }} >
                {config.col.status}
              </div>
            </Col>
            <Col span={2} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
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
      renderItem={(item: WorkFlowInstanceVM, i) => (i >= (((pageIndex - 1) * itemSize)) && i <= (pageIndex * itemSize) - 1) && (
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
            <Col span={15} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                {item.code}
              </div>
            </Col>
            <Col span={6} style={{ height: 50, borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
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
            <Col span={2} style={{ height: 50 }}>
              <div style={{ alignSelf: 'center', padding: 15, textAlign: 'center' }}>
                <Popover placement="left" trigger="hover" content={
                  <>
                    <Tooltip placement="top" title={config.buttons.setting.preview.tooltip}>
                      <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting" onClick={() => props.output.onSelectItem(item.id)} ><EyeOutlined /></Button>
                    </Tooltip>
                    <Popconfirm
                      title={config.buttons.setting.active.confirm}
                      placement="top"
                      onConfirm={() => {
                        dispatch(useWorkFlowInstanceAction().active([item.id]));
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
                        dispatch(useWorkFlowInstanceAction().deactive([item.id]));
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