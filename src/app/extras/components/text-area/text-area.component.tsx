import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './text-area.component.css';
import { FormControlVM } from '@view-models';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Form, Input, Tooltip } from 'antd';
import { useDrop, DropTargetMonitor, XYCoord, useDrag } from 'react-dnd';

export interface ITextAreaComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const TextAreaComponent: React.FC<ITextAreaComponentProps> = (props: ITextAreaComponentProps) => {
  return (
    <Input.TextArea name={props.input.item.name} id={props.input.item.id} key={props.input.item.id + '-' + props.input.item.name} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />
  );
};