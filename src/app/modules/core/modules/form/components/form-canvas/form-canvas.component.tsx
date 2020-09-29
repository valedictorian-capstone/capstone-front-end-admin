import { PlusOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { FormControlCM, FormControlUM } from '@view-models';
import { Button, Card, Input, Select, Slider } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { FormOptionComponent } from '..';
import './form-canvas.component.css';

export interface IFormCanvasComponentProps extends IBaseProps {
  input: {
    control: FormControlCM | FormControlUM,
  };
  output: {
    edit: (control: FormControlCM | FormControlUM) => void,
  };
}

export const FormCanvasComponent: React.FC<IFormCanvasComponentProps> = (props: IFormCanvasComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const canvas = environment.i18n[region].data['form'].canvas;
  const [control, setControl] = React.useState<FormControlCM | FormControlUM>({
    ...props.input.control,
    options: JSON.parse(props.input.control.options as string),
    placeHolder: props.input.control.type !== 'date-range' ? props.input.control.placeHolder : JSON.parse(props.input.control.placeHolder),
  });
  React.useEffect(() => {
    props.output.edit({
      ...control,
      options: JSON.stringify(control.options),
      placeHolder: control.type === 'date-range' ? JSON.stringify(control.placeHolder) : control.placeHolder,
    });
  }, [control]);
  return control ? (
    <Card key="canvas" title={(
      <span style={{ textAlign: 'center', display: 'block' }}>
        {canvas.title.controls}
      </span>
    )} style={{ background: 'transparent', border: '1px solid gray', width: 500 }}>
      <>
        <div style={{ margin: '16px 0' }} >Name: </div>
        <Input placeholder={canvas.form.basic.name.placeholder} value={control.name} onChange={(e) => setControl({ ...control, name: e.target.value })} />
        <div style={{ margin: '16px 0' }} >Placeholder: </div>
        {       control.type !== 'date-range' ? <Input placeholder={canvas.form.basic.placeHolder.placeholder} value={control.placeHolder} onChange={(e) => setControl({ ...control, placeHolder: e.target.value })} /> : <Input.Group compact={true}>
          <Input style={{ width: '50%' }} placeholder={canvas.form.basic.placeHolder['placeholder-array'][0]} value={control.placeHolder[0]} onChange={(e) => { (control.placeHolder as any)[0] = e.target.value; setControl({ ...control }); }} />
          <Input style={{ width: '50%' }} placeholder={canvas.form.basic.placeHolder['placeholder-array'][1]} value={control.placeHolder[1]} onChange={(e) => { (control.placeHolder as any)[1] = e.target.value; setControl({ ...control }); }} />
        </Input.Group>}
        {(control.type === 'input' && control.subType !== 'password') && <>
          <div style={{ margin: '16px 0' }} >Subtype: </div>
          <Select defaultValue="text" style={{ width: '100%' }} value={control.subType} onChange={(value) => setControl({ ...control, subType: value })}>
            <Select.Option value="text">Text</Select.Option>
            <Select.Option value="number">Number</Select.Option>
          </Select>
          <div style={{ margin: '16px 0' }} >Tooltip: </div>
          <Input placeholder={canvas.form.basic.tooltip.placeholder} value={control.tooltip} onChange={(e) => setControl({ ...control, tooltip: e.target.value })} />
        </>}
        <div style={{ margin: '16px 0' }} >Width: </div>
        <Slider defaultValue={12} value={(control as FormControlCM | FormControlUM).width} min={6} max={24} marks={{
          6: '25%',
          12: '50%',
          18: '75%',
          24: '100%',
        }} onChange={(value: number) => setControl({ ...control, width: value })} />
        {(control.type === 'select' || control.type === 'multi-select' || control.type === 'check-box-group' || control.type === 'radio' || control.type === 'auto-complete') && (
          <>
            <div style={{ margin: '16px 0' }} >Options: </div>
            {(control.options as any).map((option: { value: string, label: string }, i: number) => (
              <FormOptionComponent key={uuid()} input={{ option }} output={{
                save: (op) => {
                  (control.options as any)[i] = op;
                  setControl({ ...control });
                },
                remove: () => {
                  (control.options as any).splice(i, 1);
                  setControl({ ...control });
                },
              }} />
            ))}
            <Button
              type="primary"
              onClick={() => {
                (control.options as any).push({ value: '', label: '' });
                setControl({ ...control });
              }}
              style={{ marginTop: 10 }}
            >
              <PlusOutlined /> Add field
                </Button>
          </>
        )}
      </>
    </Card>
  ) : <></>;
};