import { PatternVM } from '../basic-view-models';
import { AccountExtraInformationDataVM } from './account-extra-information-data.view-model';

export interface AccountExtraInformationVM {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly subType: string;
  readonly options: string;
  readonly placeHolder: string;
  readonly tooltip: string;
  readonly accountExtraInformationDatas: AccountExtraInformationDataVM[];
  readonly patterns: PatternVM[];
  readonly position: number;
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface AccountExtraInformationCM {
  id: string;
  name: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
  isDelete: boolean;
  position: number;
}

export interface AccountExtraInformationUM {
  id: string;
  name: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
  isDelete: boolean;
  position: number;
}