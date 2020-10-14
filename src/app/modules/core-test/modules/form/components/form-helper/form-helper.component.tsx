import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { FormControlCM, FormControlUM } from '@view-models';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { FormItemComponent } from '..';
import './form-helper.component.css';

export interface IFormHelperComponentProps extends IBaseProps {
  input: {
    horizontal?: boolean,
  };
  output: {};
}

export const FormHelperComponent: React.FC<IFormHelperComponentProps> = (props: IFormHelperComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-palette'][region];
  return (
    <div className={'form-helper-container' + (props.input.horizontal ? ' horizontal' : '')}>
      <div className={'form-helper-content' + (props.input.horizontal ? ' horizontal' : '')}>
        {config.items.map((item, index) => <FormItemComponent key={uuid()} output={{}} input={{ item: { ...item, id: uuid() } as FormControlUM | FormControlCM, index, disabled: true }} />)}
      </div>
    </div>
  );
};