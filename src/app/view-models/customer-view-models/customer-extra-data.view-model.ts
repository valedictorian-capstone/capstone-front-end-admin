import { CustomerExtraInformationDataVM } from './customer-extra-information-data.view-model';

export interface CustomerExtraDataVM {
  readonly Id: string;
  readonly CustomerId: string;
  readonly CustomerExtraInformationDatas: CustomerExtraInformationDataVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface CustomerExtraDataCM {
  readonly CustomerId: string;
}

export interface CustomerExtraDataUM {
  readonly Id: string;
  readonly CustomerId: string;
}