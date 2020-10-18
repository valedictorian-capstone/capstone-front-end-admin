import { CheckOutlined, CloseOutlined, EditOutlined, InboxOutlined, InfoCircleOutlined, MinusCircleOutlined, PlusCircleOutlined, PlusOutlined, RestOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { ExtraInformationUM, FormControlUM } from '@view-models';
import { AutoComplete, Button, Checkbox, Col, DatePicker, Form, Input, Popconfirm, Radio, Rate, Row, Select, Slider, Switch, Tag, TimePicker, Tooltip, Upload } from 'antd';
import moment from 'moment';
import React from 'react';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';
import './form-control-setting.component.css';

export interface IFormControlSettingComponentProps extends IBaseProps {
  input: {
    item: FormControlUM | ExtraInformationUM,
    isPreview?: boolean,
    index: number,
    canEdit?: boolean,
    isNew?: boolean,
    isUseDeactive?: boolean,
    active: number,
  };
  output: {
    moveControl?: (dragIndex: number, hoverIndex: number) => void,
    onEdit?: () => void,
    onDone?: (data: FormControlUM | ExtraInformationUM) => void,
    onCancel?: () => void,
    onRemove?: () => void,
  };
}
interface DragItem {
  index: number;
  id: string;
  type: string;
  item: FormControlUM | ExtraInformationUM;
}
export const FormControlSettingComponent: React.FC<IFormControlSettingComponentProps> = (props: IFormControlSettingComponentProps) => {
  const [editable, setEditable] = React.useState<boolean>(props.input.canEdit || false);
  const [form] = Form.useForm<FormControlUM | ExtraInformationUM>();
  const render = () => {
    switch (props.input.item.type) {
      case 'auto-complete':
        return <AutoComplete
          key={props.input.item.id}
          options={props.input.item.options}
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
          placeholder={props.input.item.placeHolder}
          filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}
        />;
      case 'date-picker':
        return <DatePicker
          key={props.input.item.id}
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
          placeholder={props.input.item.placeHolder}
        />;
      case 'date-range':
        return <DatePicker.RangePicker
          key={props.input.item.id}
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
          placeholder={['From date', 'To date']}
        />;
      case 'select':
        return <Select
          showSearch={true}
          allowClear={true}
          placeholder={props.input.item.placeHolder}
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
          optionFilterProp="children"
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {props.input.item.options.map((option: { label: string, value: string }) => (
            <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
          ))}
        </Select>;
      case 'multi-select':
        return <Select
          showSearch={true}
          allowClear={true}
          mode="multiple"
          placeholder={props.input.item.placeHolder}
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
          optionFilterProp="children"
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {props.input.item.options.map((option: { label: string, value: string }) => (
            <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
          ))}
        </Select>;
      case 'input':
        return <Input type={props.input.item.subType} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />;
      case 'text-area':
        return <Input.TextArea name={props.input.item.name} id={props.input.item.id} key={props.input.item.id + '-' + props.input.item.name} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />;
      case 'time-picker':
        return <TimePicker
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
          placeholder={props.input.item.placeHolder}
          defaultValue={moment('00:00:00', 'HH:mm:ss')}
        />;
      case 'check-box':
        return <Checkbox
          key={props.input.item.id}
        >{props.input.item.label}</Checkbox>;
      case 'radio':
        return <Radio.Group
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
        >
          {props.input.item.options.map((option: { label: string, value: string }) => (
            <Radio key={option.value} value={option.value}>{option.label}</Radio>
          ))}
        </Radio.Group>;
      case 'rate':
        return <Rate />;
      case 'switch':
        return <Switch />;
      case 'slider':
        return <Slider />;
      case 'file-upload':
        return <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>;
      case 'check-box-group':
        return <Checkbox.Group style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}>
          {props.input.item.options.map((option: { label: string, value: string }) => (
            <Checkbox key={option.value} value={option.value}>{option.label}</Checkbox>
          ))}
        </Checkbox.Group>;
      default:
        return <Input type={props.input.item.subType} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />;
    }
  };
  React.useEffect(() => {
    setEditable(props.input.canEdit || false);
  }, [props.input.canEdit]);
  const ref = React.useRef<any>(null);
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
      if (props.output.moveControl) {
        props.output.moveControl(dragIndex, hoverIndex);
      }
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    item: { type: props.input.isNew ? 'new-control' : 'control', item: props.input.item, index: props.input.index },
  });
  drag(drop(ref));
  React.useEffect(() => {
    form.setFieldsValue({ ...props.input.item });
  }, [props.input.item]);
  return (
    <Col ref={props.input.active === -1 && !props.input.isPreview ? ref : null} key={props.input.item.id} id={props.input.item.id} xs={props.input.item.xs} sm={props.input.item.sm} md={props.input.item.sm} lg={props.input.item.lg} xl={props.input.item.xl} xxl={props.input.item.xxl}>
      <div className="form-control" style={{ position: 'relative' }}>
        <label>
          {props.input.item.label}
          <Tooltip title={props.input.item.tooltip}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        </label>
        <div className="ant-row ant-form-item">
          <div className="ant-col ant-form-item-control">
            <div className="ant-form-item-control-input">
              <div className="ant-form-item-control-input-content">
                {
                  render()
                }
              </div>
            </div>
          </div>
        </div>
        {!props.input.isPreview && <div className="tool-box" style={{ display: !editable ? 'flex' : 'none', position: 'relative' }}>
          <Button onClick={props.output.onEdit} style={{ marginRight: 5 }} size="small" type="primary" shape="circle" icon={<EditOutlined />} className="setting" />
          <Popconfirm
            title={`Are you sure ${props.input.isUseDeactive ? (props.input.item.isDelete === undefined ? 'delete' : (props.input.item.isDelete ? 'active' : 'deactive')) : 'delete'} this control?`}
            onConfirm={props.output.onRemove}
            okText="Sure"
            cancelText="No"
          >
            {!props.input.isUseDeactive && <Button size="small" shape="circle" type="primary" danger={true} icon={<RestOutlined />} className="setting" />}
            {props.input.isUseDeactive && <Button size="small" shape="circle" danger={!props.input.item.isDelete} icon={props.input.item.isDelete === undefined ? <RestOutlined /> : (props.input.item.isDelete ? <PlusCircleOutlined /> : <MinusCircleOutlined />)} className="setting" />}
          </Popconfirm>
          <span style={{ position: 'absolute', top: 0, right: 0 }}><Tag color={props.input.item.isDelete ? 'error' : 'success'}>{props.input.item.isDelete ? 'Deactive' : 'Active'}</Tag></span>
        </div>}
        {!props.input.isPreview && <div className={'detail-box' + (editable ? ' selected' : '')}>
          <div className={'control-detail' + (editable ? ' selected' : '')}>
            <Form form={form}>
              <div style={{ border: '1px solid gray', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.5rem' }}>
                <span style={{ display: 'block', textAlign: 'center' }}>Information</span>
              </div>
              <Row style={{ height: '12rem', maxHeight: '12rem', overflow: 'auto' }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Name</label>
                    <Form.Item name="name">
                      <Input placeholder="Enter name of control" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>PlaceHolder</label>
                    <Form.Item name="placeHolder">
                      <Input placeholder="Enter placeHolder of control" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Label</label>
                    <Form.Item name="label">
                      <Input placeholder="Enter label of control" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>FontSize</label>
                    <Form.Item name="fontSize">
                      <Input placeholder="Enter fontSize of control" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Size</label>
                    <Form.Item name="size">
                      <Input placeholder="Enter size of control" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Color</label>
                    <Form.Item name="color">
                      <Input placeholder="Enter color of control" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <div className="form-control">
                    <label>Type</label>
                    <Form.Item name="type">
                      <Select
                        value={props.input.item.type}
                        showSearch={true}
                        allowClear={true}
                        placeholder="Select type"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={'input'}>Input</Select.Option>
                        <Select.Option value={'auto-complete'}>AutoComplete</Select.Option>
                        <Select.Option value={'date-picker'}>Date Picker</Select.Option>
                        <Select.Option value={'time-picker'}>Time Picker</Select.Option>
                        <Select.Option value={'select'}>Select</Select.Option>
                        <Select.Option value={'text-area'}>Text Area</Select.Option>
                        <Select.Option value={'multi-select'}>Multi Select</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <div className="form-control">
                    <label>SubType</label>
                    <Form.Item name="subType">
                      <Select
                        value={props.input.item.subType}
                        showSearch={true}
                        allowClear={true}
                        disabled={props.input.item.type !== 'input'}
                        placeholder="Select subType"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={''}>None</Select.Option>
                        <Select.Option value={'password'}>Password</Select.Option>
                        <Select.Option value={'text'}>Text</Select.Option>
                        <Select.Option value={'number'}>Number</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <div className="form-control">
                    <label>Tooltip</label>
                    <Form.Item name="tooltip">
                      <Input placeholder="Enter tooltip of control" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <div className="form-control">
                    <label>IsCapitialize</label>
                    <Form.Item name="isCapitialize">
                      <Checkbox checked={props.input.item.isCapitialize} />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Small Phone</label>
                    <Form.Item name="xs">
                      <Select
                        value={props.input.item.xs}
                        showSearch={true}
                        allowClear={true}
                        placeholder="Select size small phone"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={6}>1/4 screen</Select.Option>
                        <Select.Option value={8}>1/3 screen</Select.Option>
                        <Select.Option value={12}>1/2 screen</Select.Option>
                        <Select.Option value={16}>2/3 screen</Select.Option>
                        <Select.Option value={18}>3/4 screen</Select.Option>
                        <Select.Option value={24}>Full screen</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Medium Phone</label>
                    <Form.Item name="sm">
                      <Select
                        value={props.input.item.sm}
                        showSearch={true}
                        allowClear={true}
                        placeholder="Select size medium phone"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={6}>1/4 screen</Select.Option>
                        <Select.Option value={8}>1/3 screen</Select.Option>
                        <Select.Option value={12}>1/2 screen</Select.Option>
                        <Select.Option value={16}>2/3 screen</Select.Option>
                        <Select.Option value={18}>3/4 screen</Select.Option>
                        <Select.Option value={24}>Full screen</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Tablet</label>
                    <Form.Item name="md">
                      <Select
                        value={props.input.item.md}
                        showSearch={true}
                        allowClear={true}
                        placeholder="Select size tablet"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={6}>1/4 screen</Select.Option>
                        <Select.Option value={8}>1/3 screen</Select.Option>
                        <Select.Option value={12}>1/2 screen</Select.Option>
                        <Select.Option value={16}>2/3 screen</Select.Option>
                        <Select.Option value={18}>3/4 screen</Select.Option>
                        <Select.Option value={24}>Full screen</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Small Laptop</label>
                    <Form.Item name="lg">
                      <Select
                        value={props.input.item.lg}
                        showSearch={true}
                        allowClear={true}
                        placeholder="Select size small Laptop"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={6}>1/4 screen</Select.Option>
                        <Select.Option value={8}>1/3 screen</Select.Option>
                        <Select.Option value={12}>1/2 screen</Select.Option>
                        <Select.Option value={16}>2/3 screen</Select.Option>
                        <Select.Option value={18}>3/4 screen</Select.Option>
                        <Select.Option value={24}>Full screen</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Medium Laptop</label>
                    <Form.Item name="xl">
                      <Select
                        value={props.input.item.xl}
                        showSearch={true}
                        allowClear={true}
                        placeholder="Select size medium Laptop"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={6}>1/4 screen</Select.Option>
                        <Select.Option value={8}>1/3 screen</Select.Option>
                        <Select.Option value={12}>1/2 screen</Select.Option>
                        <Select.Option value={16}>2/3 screen</Select.Option>
                        <Select.Option value={18}>3/4 screen</Select.Option>
                        <Select.Option value={24}>Full screen</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                  <div className="form-control">
                    <label>Full HD Laptop</label>
                    <Form.Item name="xxl">
                      <Select
                        value={props.input.item.xxl}
                        showSearch={true}
                        allowClear={true}
                        placeholder="Select size full HD Laptop"
                        style={{ width: '100%', background: 'white' }}
                        optionFilterProp="children"
                        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
                      >
                        <Select.Option value={6}>1/4 screen</Select.Option>
                        <Select.Option value={8}>1/3 screen</Select.Option>
                        <Select.Option value={12}>1/2 screen</Select.Option>
                        <Select.Option value={16}>2/3 screen</Select.Option>
                        <Select.Option value={18}>3/4 screen</Select.Option>
                        <Select.Option value={24}>Full screen</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                {(props.input.item.type === 'select' || props.input.item.type === 'multi-select' || props.input.item.type === 'radio' || props.input.item.type === 'auto-complete' || props.input.item.type === 'check-box-group') && (
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div className="form-control">
                      <label>Options</label>
                      <Form.List name="options">
                        {(fields, { add, remove }) => {
                          return (
                            <div>
                              {fields.map((field, index) => (
                                <Row key={field.key}>
                                  <Col span={11}>
                                    <div className="form-control">
                                      <label>Value</label>
                                      <Form.Item
                                        name={[field.name, 'label']}
                                        rules={[{ required: true, message: 'Label is required' }]}
                                      >
                                        <Input style={{ width: '100%' }} placeholder="Input label" />
                                      </Form.Item>
                                    </div>
                                  </Col>
                                  <Col span={11}>
                                    <div className="form-control">
                                      <label>Label</label>
                                      <Form.Item
                                        name={[field.name, 'value']}
                                        rules={[{ required: true, message: 'Value is required' }]}
                                      >
                                        <Input style={{ width: '100%' }} placeholder="Input value" />
                                      </Form.Item>
                                    </div>
                                  </Col>
                                  <Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button size="small" shape="circle" icon={<RestOutlined />} onClick={() => {
                                      remove(field.name);
                                    }} danger={true} />
                                  </Col>
                                </Row>
                              ))}
                              <Button
                                type="dashed"
                                onClick={() => {
                                  add();
                                }}
                                style={{ width: '100%' }}
                              >
                                <PlusOutlined /> Add option
                              </Button>
                            </div>
                          );
                        }}
                      </Form.List>
                    </div>
                  </Col>
                )}
              </Row>
            </Form>
            <div style={{ border: '1px solid gray', width: '100%', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button onClick={() => {
                form.isFieldsTouched(true);
                form.validateFields().then(() => {
                  if (props.output.onDone) {
                    props.output.onDone({ ...props.input.item, ...form.getFieldsValue() });
                  }
                });
              }} style={{ marginRight: 5 }} size="middle" type="primary" shape="circle" icon={<CheckOutlined />} className="setting" />
              <Button onClick={props.output.onCancel} size="middle" shape="circle" type="primary" danger={true} icon={<CloseOutlined />} className="setting" />
            </div>
          </div>
        </div>}
      </div>
    </Col >
  );
};