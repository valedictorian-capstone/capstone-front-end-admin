import { PatternVM } from '../basic-view-models';
import { CustomerExtraInformationDataVM } from './customer-extra-information-data.view-model';

export interface CustomerExtraInformationVM {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly subType: string;
  readonly options: string;
  readonly placeHolder: string;
  readonly tooltip: string;
  readonly customerExtraInformationDatas: CustomerExtraInformationDataVM[];
  readonly patterns: PatternVM[];
  position: number;
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface CustomerExtraInformationCM {
  id: string;
  name: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
  position: number;
  isDelete: boolean;
}

export interface CustomerExtraInformationUM {
  id: string;
  name: string;
  type: string;
  subType: string;
  options: string;
  placeHolder: string;
  tooltip: string;
  position: number;
  isDelete: boolean;
}