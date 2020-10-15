import { CustomerExtraInformationVM, CustomerVM } from '.';
export interface CustomerExtraInformationDataVM {
  readonly id: string;
  readonly customerExtraInformation: CustomerExtraInformationVM;
  readonly customer: CustomerVM;
  readonly value: string;
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface CustomerExtraInformationDataCM {
  customerExtraInformationId: string;
  customerExtraDataId: string;
  value: string;
}

export interface CustomerExtraInformationDataUM {
  id: string;
  customerExtraInformationId: string;
  customerExtraDataId: string;
  value: string;
}