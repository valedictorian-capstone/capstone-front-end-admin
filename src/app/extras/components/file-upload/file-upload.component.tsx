import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Button, Upload } from 'antd';
import React from 'react';
import './file-upload.component.css';

export interface IFileUploadComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const FileUploadComponent: React.FC<IFileUploadComponentProps> = (props: IFileUploadComponentProps) => {

  return (
    <Upload.Dragger name="files" action="/upload.do">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </Upload.Dragger>
  );
};