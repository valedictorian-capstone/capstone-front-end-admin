import { PatternVM } from '../basic-view-models';
import { AccountExtraInformationDataVM } from './account-extra-information-data.view-model';

export interface AccountExtraInformationVM {
  readonly id: string;
  readonly name: string;
  readonly accountId: string;
  readonly type: string;
  readonly subType: string;
  readonly options: string;
  readonly placeHolder: string;
  readonly tooltip: string;
  readonly accountExtraInformationDatas: AccountExtraInformationDataVM[];
  readonly patterns: PatternVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface AccountExtraInformationCM {
  name: string;
  accountId: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
}

export interface AccountExtraInformationUM {
  id: string;
  name: string;
  accountId: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
}