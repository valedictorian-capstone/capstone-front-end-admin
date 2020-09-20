import { PatternVM } from '../basic-view-models';
import { AccountExtraInformationDataVM } from './account-extra-information-data.view-model';

export interface AccountExtraInformationVM {
  readonly Id: string;
  readonly Name: string;
  readonly AccountId: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Options: string;
  readonly PlaceHolder: string;
  readonly Tooltip: string;
  readonly AccountExtraInformationDatas: AccountExtraInformationDataVM[];
  readonly Patterns: PatternVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface AccountExtraInformationCM {
  readonly Name: string;
  readonly AccountId: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Options: string;
  readonly PlaceHolder: string;
  readonly Tooltip: string;
}

export interface AccountExtraInformationUM {
  readonly Id: string;
  readonly Name: string;
  readonly AccountId: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Options: string;
  readonly PlaceHolder: string;
  readonly Tooltip: string;
}