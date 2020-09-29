import { ToolOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { FormControlUM, FormControlCM } from '@view-models';
import { Button, Popover, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { FormItemComponent } from '..';
import './form-palette.component.css';

export interface IFormPaletteComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormPaletteComponent = (props: IFormPaletteComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n[region].data['form'];
  return (
    <div style={{width: '80%', margin: 'auto'}}>
      {config.controls.map((item, index) => <FormItemComponent key={uuid()} output={{}} input={{ item: { ...item, id: uuid() } as FormControlUM | FormControlCM, index, disabled: true, isNew: true }} />)}
    </div>
  );
};