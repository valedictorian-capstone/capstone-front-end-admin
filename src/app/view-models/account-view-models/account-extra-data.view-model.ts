import { AccountExtraInformationDataVM } from './account-extra-information-data.view-model';

export interface AccountExtraDataVM {
  readonly id: string;
  readonly accountId: string;
  readonly accountExtraInformationDatas: AccountExtraInformationDataVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface AccountExtraDataCM {
  accountId: string;
}

export interface AccountExtraDataUM {
  id: string;
  accountId: string;
}