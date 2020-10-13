import { QuestionCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { InputComponent } from '@modules/core/modules/setting/components/input/input.component';
import { Button, Col, Form, Typography } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import './company-general.component.css';

export interface ICompanyGeneralComponentProps extends IBaseProps {
    input?: {};
    output?: {};
}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
export const CompanyGeneralComponent: FC<ICompanyGeneralComponentProps> = (props: ICompanyGeneralComponentProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const inputField = [
        {
            name: 'companyName',
            label: 'Company Name',
            rules: [{
                type: 'string',
                required: true,
                pattern: new RegExp(/\d+/g),
                min: 6,
                max: 20,
                message: 'Please input your company name!',
            }],
        },
        {
            name: 'companyDomain',
            label: 'Company Domain',
            rules: [{
                type: 'string',
                required: true,
                pattern: new RegExp(/\d+/g),
                min: 6,
                max: 20,
                message: 'Please input your company domain!',
            }],
        },
    ];
    return (
        <>
            <Col span={20} style={{ maxHeight: window.innerHeight - 110, padding: '12px 0' }}>
                <h2>
                    Change password
                </h2>
                <h3>
                    Keep your data safe by creating a password that is complex and long enough. It should be easy for you to remember but hard for others to guess.
                </h3>
            </Col>
            <Col span={20} style={{ maxHeight: window.innerHeight - 110, padding: '12px 0' }}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="companyGeneral"
                    onFinish={onFinish}
                    scrollToFirstError={true}
                >
                    {inputField.map((value, index) => {
                        return <InputComponent key={index} input={value} />;
                    })}

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Save
          </Button>
                    </Form.Item>
                </Form>
            </Col>
        </>
    );
};
