import { FormControlComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { FormControlVM, FormGroupVM } from '@view-models';
import { Col, Row } from 'antd';
import React from 'react';
import './form-preview.component.css';

export interface IFormPreviewComponentProps extends IBaseProps {
  input: {
    controls: FormControlVM[],
  };
  output: {};
}

interface DragItem {
  index: number;
  id: string;
  type: string;
  item: FormControlVM;
}

export const FormPreviewComponent: React.FC<IFormPreviewComponentProps> = (props: IFormPreviewComponentProps) => {
  const [formControls, setFormControls] = React.useState<FormControlVM[]>(props.input.controls.sort((a, b) => a.position - b.position));
  React.useEffect(() => {
    setFormControls(props.input.controls);
  }, [props.input.controls]);
  return (
    <div className="ant-form ant-form-horizontal form-editable" style={{ width: '100%', height: '100%' }}>
      <Row style={{ width: '100%', height: '100%', alignContent: 'baseline', maxHeight: '100%', overflow: 'auto' }}>
        {formControls.map((item, index) => (
          <FormControlComponent key={item.id + '-preview'} input={{ index, item, isPreview: true, active: -1 }} output={{}} />
        ))}
      </Row>
    </div>
  );
};