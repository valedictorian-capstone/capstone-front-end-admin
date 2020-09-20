import { AccountExtraInformationDataVM } from './account-extra-information-data.view-model';

export interface AccountExtraDataVM {
  readonly Id: string;
  readonly AccountId: string;
  readonly AccountExtraInformationDatas: AccountExtraInformationDataVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface AccountExtraDataCM {
  readonly AccountId: string;
}

export interface AccountExtraDataUM {
  readonly Id: string;
  readonly AccountId: string;
}