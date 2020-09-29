import { CustomerExtraInformationDataVM } from './customer-extra-information-data.view-model';

export interface CustomerExtraDataVM {
  readonly id: string;
  readonly customerId: string;
  readonly customerExtraInformationDatas: CustomerExtraInformationDataVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface CustomerExtraDataCM {
  customerId: string;
}

export interface CustomerExtraDataUM {
  id: string;
  customerId: string;
}