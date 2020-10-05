import { CheckCircleOutlined, EyeOutlined, MinusCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useFormGroupAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { FormControlCM, FormControlUM, FormGroupUM } from '@view-models';
import { Button, Col, message, Row, Tooltip } from 'antd';
import update from 'immutability-helper';
import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { FormDetailComponent } from '..';
import { FormControlComponent } from '../form-control/form-control.component';
import { FormPaletteComponent } from '../form-palette/form-palette.component';
import './form-view.component.css';
export interface IFormViewComponentProps extends IBaseProps {
  input: {
    data: FormGroupUM;
  };
  output: {
    back: () => void,
  };
}
interface DragItem {
  index: number;
  id: string;
  type: string;
  item: FormControlCM | FormControlUM;
}
export const FormViewComponent: React.FC<IFormViewComponentProps> = (props: IFormViewComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-view'][region];
  const dispatch = useDispatch();
  const [form, setForm] = React.useState<FormGroupUM>(props.input.data);
  const [controls, setControls] = React.useState<FormControlCM[] | FormControlUM[]>(form.formControls.sort((a, b) => a.position - b.position));
  const [formControlRemove, setFormControlRemove] = React.useState<string[]>([]);
  const [, drop] = useDrop({
    accept: ['control', 'new-control'],
    drop(data: DragItem) {
      if (controls.findIndex((e) => e.id === data.item.id) === -1) {
        if (data.type === 'new-control') {
          setControls([
            ...controls,
            {
              ...data.item,
              id: uuid(),
              position: controls.length + 1,
            },
          ]);
        }
      }
      return undefined;
    },
  });
  const moveControl = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = controls[dragIndex];
      setControls(
        update(controls, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }).map((e, i) => ({ ...e, position: i + 1 })).sort((a, b) => a.position - b.position),
      );
    },
    [controls],
  );
  const render = controls.map((item: FormControlCM | FormControlUM, index) => (
    <FormControlComponent output={{
      moveControl, onRemove: () => {
        setControls(controls.filter(control => control.id !== item.id).map((e, i) => ({ ...e, position: i + 1 })).sort((a, b) => a.position - b.position));
        setFormControlRemove([...formControlRemove, item.id]);
        message.success(config.message, 1);
      }, edit: (control) => {
        controls[index] = control;
        setControls([...controls].map((e, i) => ({ ...e, position: i + 1 })).sort((a, b) => a.position - b.position));
      },
    }} key={item.id} input={{ item, index }} />
  ));
  return (
    <Row gutter={24} style={{ height: (window.innerHeight - 140) }}>
      <Col span={2}
        style={{ maxHeight: window.innerHeight - 140, height: window.innerHeight - 140, overflow: 'auto', paddingBottom: 10, paddingTop: 10 }}
      >
        <FormPaletteComponent input={{}} output={{}} />
      </Col>
      <Col className="gutter-row" span={16} style={{ padding: 0, background: 'transparent' }}>
        <Row
          ref={drop}
          style={{ width: '100%', maxHeight: window.innerHeight - 140, height: window.innerHeight - 140, alignContent: 'baseline', overflow: 'auto', border: '1px solid gray' }}>
          <Col span={1} style={{ height: 50, borderBottom: '1px solid gray', padding: 13, background: 'moccasin' }}>
            <Tooltip placement="top" title={config.buttons.back.tooltip}>
              <Button onClick={props.output.back} shape="circle" size="small" type="primary" className="setting"><RollbackOutlined /></Button>
            </Tooltip>
          </Col>
          <Col span={23} style={{ height: 50, borderBottom: '1px solid gray', textAlign: 'right', padding: 13, background: 'moccasin' }}>
            <Tooltip placement="top" title={config.buttons.preview.tooltip}>
              <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><EyeOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title={config.buttons.active.tooltip}>
              <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><CheckCircleOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title={config.buttons.deactive.tooltip}>
              <Button shape="circle" size="small" danger={true} className="setting"><MinusCircleOutlined /></Button>
            </Tooltip>
          </Col>
          {render}
          <Col span={24} style={{ marginTop: 200 }} />
        </Row>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{ height: window.innerHeight - 140, border: '1px solid gray' }}>
          <FormDetailComponent input={{ form }} output={{
            onSave: (data) => {
              setForm({ ...data, formControls: [...controls] });
              dispatch(useFormGroupAction().update({ ...data, formControls: [...controls], formControlRemove }));
              dispatch(useFormGroupAction().getAll());
            },
          }} />
        </div>
      </Col>
    </Row>
  );
};