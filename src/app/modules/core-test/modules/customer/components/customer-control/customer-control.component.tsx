import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, InsertRowRightOutlined, MinusCircleOutlined, RestOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { CustomerExtraInformationCM, CustomerExtraInformationUM } from '@view-models';
import { AutoComplete, Button, Checkbox, Col, DatePicker, Input, Popconfirm, Popover, Radio, Select, Switch, TimePicker, Tooltip } from 'antd';
import moment from 'moment';
import React, { useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';
import { useSelector } from 'react-redux';
import { CustomerCanvasComponent } from '..';

export interface ICustomerControlComponentProps extends IBaseProps {
  input: {
    item: CustomerExtraInformationCM | CustomerExtraInformationUM,
    index: number,
    disabled?: boolean,
    isNew?: boolean,
  };
  output: {
    moveControl: (dragIndex: number, hoverIndex: number) => void,
    onChangeStatus: (status: boolean) => void,
    edit: (control: CustomerExtraInformationCM | CustomerExtraInformationUM) => void,
  };
}
interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const CustomerControlComponent: React.FC<ICustomerControlComponentProps> = (props: ICustomerControlComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.customer.components['customer-control'][region];
  const ref = useRef<any>(null);
  const [, drop] = useDrop({
    accept: 'control',
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.input.index as number;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      props.output.moveControl(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    item: { type: props.input.isNew ? 'new-control' : 'control', item: props.input.item, index: props.input.index },
  });
  const renderInput = (item: CustomerExtraInformationCM | CustomerExtraInformationUM) => {
    switch (item.type) {
      case 'select':
        return <Select
          showSearch={true}
          allowClear={true}
          disabled={props.input.disabled ? props.input.disabled : false}
          placeholder={item.placeHolder}
          style={{ width: '100%', background: 'white' }}
          optionFilterProp="children"
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {JSON.parse(item.options).map((option: { label: string, value: string }) => (
            <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
          ))}
        </Select>;
      case 'multi-select':
        return <Select
          showSearch={true}
          allowClear={true}
          mode="multiple"
          disabled={props.input.disabled ? props.input.disabled : false}
          placeholder={item.placeHolder}
          style={{ width: '100%', background: 'white' }}
          optionFilterProp="children"
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {JSON.parse(item.options).map((option: { label: string, value: string }) => (
            <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
          ))}
        </Select>;
      case 'auto-complete':
        return <AutoComplete
          options={JSON.parse(item.options)}
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={item.placeHolder}
          filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}
        />;
      case 'radio':
        return <Radio.Group style={{ width: '100%' }} disabled={props.input.disabled ? props.input.disabled : false}>
          {JSON.parse(item.options).map((option: { label: string, value: string }) => (
            <Radio.Button key={option.value} value={option.value}>{option.label}</Radio.Button>
          ))}
        </Radio.Group>;
      case 'check-box':
        return JSON.parse(item.options).map((option: { label: string, value: string }) => (
          <Checkbox disabled={props.input.disabled ? props.input.disabled : false} style={{ width: '100%' }} value={option.value} key={option.value}>{option.label}</Checkbox>
        ));
      case 'check-box-group':
        return <Checkbox.Group disabled={props.input.disabled ? props.input.disabled : false} style={{ width: '100%' }} options={JSON.parse(item.options)} />;
      case 'date-picker':
        return <DatePicker
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={item.placeHolder}
        />;
      case 'date-range':
        return <DatePicker.RangePicker
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={JSON.parse(item.placeHolder)}
        />;
      case 'time-picker':
        return <TimePicker
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={item.placeHolder}
          defaultValue={moment('00:00:00', 'HH:mm:ss')}
        />;
      case 'text-area':
        return <Input.TextArea disabled={props.input.disabled ? props.input.disabled : false} rows={5} name={item.name} id={item.id} key={item.id + '-' + item.name} placeholder={item.placeHolder} style={{ width: '100%', background: 'white' }} />;
      case 'switch':
        return <Switch disabled={props.input.disabled ? props.input.disabled : false} checkedChildren={JSON.parse(item.placeHolder)[0]} unCheckedChildren={JSON.parse(item.placeHolder)[1]} />;
      default:
        return <Input disabled={props.input.disabled ? props.input.disabled : false} suffix={
          <Tooltip title={item.tooltip}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        } name={item.name} id={item.id} key={item.id + '-' + item.name} type={item.subType} placeholder={item.placeHolder} style={{ width: '100%', background: 'white' }} />;
    }
  };
  drag(drop(ref));
  return (
    <Col
      ref={ref}
      key={props.input.item.id}
      span={24}
    >
      <div style={{ width: '100%', border: '1px dashed gray', marginBottom: 5, background: 'transparent' }}>
        <span style={{ display: 'block', textAlign: 'right', padding: 10, background: 'black' }}>
          <Tooltip placement="top" title={config.drag.tooltip}>
            <Button shape="circle" size="small" style={{ marginRight: 10, cursor: 'grab' }} className="setting"><InsertRowRightOutlined /></Button>
          </Tooltip>
          <Popover placement="bottomRight" trigger="click" content={
            <>
              <CustomerCanvasComponent input={{ control: props.input.item }} output={{ edit: props.output.edit }} />
            </>
          }>
            <Tooltip placement="top" title={config.edit.tooltip}>
              <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><EditOutlined /></Button>
            </Tooltip>
          </Popover>
          <Popconfirm
            title={config.active.confirm}
            placement="top"
            onConfirm={() => {
              // dispatch(useFormGroupAction().active([item.id]));
            }}
            okText={config.active.yes}
            cancelText={config.active.no}
          >
            <Tooltip placement="top" title={config.active.tooltip}>
              <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><CheckCircleOutlined /></Button>
            </Tooltip>
          </Popconfirm>
          <Popconfirm
            title={config.deactive.confirm}
            placement="top"
            onConfirm={() => {
              // dispatch(useFormGroupAction().deactive([item.id]));
            }}
            okText={config.deactive.yes}
            cancelText={config.deactive.no}
          >
            <Tooltip placement="top" title={config.deactive.tooltip}>
              <Button size="small" className="setting" shape="circle" danger={true} icon={<MinusCircleOutlined />} />
            </Tooltip>
          </Popconfirm>
        </span>
        <span style={{ display: 'block', padding: 10, minHeight: 55 }}>
          {renderInput(props.input.item as CustomerExtraInformationCM | CustomerExtraInformationUM)}
        </span>
      </div>
    </Col>
  );
};