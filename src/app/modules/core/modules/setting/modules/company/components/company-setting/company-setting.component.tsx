import { QuestionCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { InputComponent } from '@modules/core/modules/setting/components/input/input.component';
import { Button, Col, Form, Typography, Tabs, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import './company-setting.component.css';
import { ActivityTypeComponent } from './component/activity-type/activity-type.component';
import { CompanyGeneralComponent } from './component/company-general/company-general.component';
import { CurrencyComponent } from './component/currency/currency.component';
import { LostReasonComponent } from './component/lost-reason/lost-reason.component';

export interface ICompanySettingComponentProps extends IBaseProps {
    input?: {};
    output?: {};
}

const { TabPane } = Tabs;

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
export const CompanySettingComponent: FC<ICompanySettingComponentProps> = (props: ICompanySettingComponentProps) => {
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
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="General" key="1">
                            <CompanyGeneralComponent />
                        </TabPane>
                        <TabPane tab="Activity types" key="2">
                            <ActivityTypeComponent />
                        </TabPane>
                        <TabPane tab="Currencies" key="3">
                            <CurrencyComponent />
                        </TabPane>
                        <TabPane tab="Lost Reasons" key="4">
                            <LostReasonComponent />
                        </TabPane>
                    </Tabs>
                </div>
            </Col>
        </>
    );
};
