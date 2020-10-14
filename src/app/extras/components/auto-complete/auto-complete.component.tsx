import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { AutoComplete } from 'antd';
import React from 'react';
import './auto-complete.component.css';
export interface IAutoCompleteComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const AutoCompleteComponent: React.FC<IAutoCompleteComponentProps> = (props: IAutoCompleteComponentProps) => {
  return (
    <AutoComplete
      key={props.input.item.id}
      options={props.input.item.options}
      style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
      placeholder={props.input.item.placeHolder}
      filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}
    />
  );
};