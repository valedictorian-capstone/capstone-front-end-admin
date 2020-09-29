import { PatternVM } from '../basic-view-models';
import { CustomerExtraInformationDataVM } from './customer-extra-information-data.view-model';

export interface CustomerExtraInformationVM {
  readonly id: string;
  readonly name: string;
  readonly customerId: string;
  readonly type: string;
  readonly subType: string;
  readonly options: string;
  readonly placeHolder: string;
  readonly tooltip: string;
  readonly customerExtraInformationDatas: CustomerExtraInformationDataVM[];
  readonly patterns: PatternVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface CustomerExtraInformationCM {
  name: string;
  customerId: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
}

export interface CustomerExtraInformationUM {
  id: string;
  name: string;
  customerId: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
}