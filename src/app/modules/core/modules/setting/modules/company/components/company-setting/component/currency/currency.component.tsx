import { QuestionCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import React, { FC, useEffect, useState } from 'react';
import './currency.component.css';

export interface ICurrencyComponentProps extends IBaseProps {
    input?: {};
    output?: {};
}

export const CurrencyComponent: FC<ICurrencyComponentProps> = (props: ICurrencyComponentProps) => {
    return (
        <>
        </>
    );
};
