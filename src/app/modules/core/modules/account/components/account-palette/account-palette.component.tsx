import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { AccountExtraInformationCM } from '@view-models';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { AccountItemComponent } from '..';
import './account-palette.component.css';

export interface IAccountPaletteComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const AccountPaletteComponent: React.FC<IAccountPaletteComponentProps> = (props: IAccountPaletteComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.account.components['account-palette'][region];
  return (
    <div style={{width: '80%', margin: 'auto'}}>
      {/* {config.items.map((item, index) => <AccountItemComponent key={uuid()} output={{}} input={{ item: { ...item, id: uuid(), position: 0, isDelete: false } as AccountExtraInformationCM, index, disabled: true, isNew: true }} />)} */}
    </div>
  );
};