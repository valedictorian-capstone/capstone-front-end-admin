import { PatternVM } from '../basic-view-models';
import { CustomerExtraInformationDataVM } from './customer-extra-information-data.view-model';

export interface CustomerExtraInformationVM {
  readonly Id: string;
  readonly Name: string;
  readonly CustomerId: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Options: string;
  readonly PlaceHolder: string;
  readonly Tooltip: string;
  readonly CustomerExtraInformationDatas: CustomerExtraInformationDataVM[];
  readonly Patterns: PatternVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface CustomerExtraInformationCM {
  readonly Name: string;
  readonly CustomerId: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Options: string;
  readonly PlaceHolder: string;
  readonly Tooltip: string;
}

export interface CustomerExtraInformationUM {
  readonly Id: string;
  readonly Name: string;
  readonly CustomerId: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Options: string;
  readonly PlaceHolder: string;
  readonly Tooltip: string;
}