import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Input } from 'antd';
import React from 'react';
import './input.component.css';

export interface IInputComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const InputComponent: React.FC<IInputComponentProps> = (props: IInputComponentProps) => {
  return (
    <>
      {
        props.input.item.subType === 'password'
          ? <Input.Password name={props.input.item.name} id={props.input.item.id} key={props.input.item.id} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />
          : <Input name={props.input.item.name} id={props.input.item.id} key={props.input.item.id} type={props.input.item.subType} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />
      }
    </>
  );
};