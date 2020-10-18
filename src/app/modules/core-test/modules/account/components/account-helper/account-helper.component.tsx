import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { ExtraInformationCM, ExtraInformationUM } from '@view-models';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { AccountItemComponent } from '..';
import './account-helper.component.css';

export interface IAccountHelperComponentProps extends IBaseProps {
  input: {
    horizontal?: boolean,
  };
  output: {};
}

export const AccountHelperComponent: React.FC<IAccountHelperComponentProps> = (props: IAccountHelperComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.account.components['account-palette'][region];
  return (
    <div className={'account-helper-container' + (props.input.horizontal ? ' horizontal' : '')}>
      <div className={'account-helper-content' + (props.input.horizontal ? ' horizontal' : '')}>
        {config.items.map((item, index) => <AccountItemComponent key={uuid()} output={{}} input={{ item: { ...item, id: uuid() } as ExtraInformationUM | ExtraInformationCM, index, disabled: true }} />)}
      </div>
    </div>
  );
};