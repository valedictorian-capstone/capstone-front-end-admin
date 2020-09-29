import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { FormGroupCM, FormGroupUM } from '@view-models';
import { Button, Card, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './form-detail.component.css';

export interface IFormDetailComponentProps extends IBaseProps {
  input: {
    form: FormGroupCM | FormGroupUM,
  };
  output: {
    onSave: (form: FormGroupCM | FormGroupUM) => void,
  };
}

export const FormDetailComponent = (props: IFormDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const detail = environment.i18n[region].data['form'].detail;
  const [form, setForm] = React.useState<FormGroupCM | FormGroupUM>(props.input.form);
  return (
    <Card key="detail" title={(
      <span style={{ textAlign: 'center', display: 'block' }}>
        {detail.title}
      </span>
    )} style={{ height: '100%', background: 'transparent', border: '1px solid rgb(217 217 217' }}>
      {form && (
        <>
          <Input placeholder={detail.form.basic.code.placeholder} value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
          <div style={{ margin: '16px 0' }} />
          <Input placeholder={detail.form.basic.name.placeholder} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <div style={{ margin: '16px 0' }} />
          <Input.TextArea rows={6} placeholder={detail.form.basic.description.placeholder} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <div style={{ margin: '16px 0', textAlign: 'center' }}>
            <Button type="primary" shape="round" style={{ marginRight: 10 }} onClick={() => props.output.onSave(form)}>{detail.form.basic.button.save}</Button>
          </div>
        </>
      )}
    </Card>
  );
};