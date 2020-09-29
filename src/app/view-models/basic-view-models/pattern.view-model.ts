import { AccountExtraInformationVM } from '../account-view-models';
import { CustomerExtraInformationVM } from '../customer-view-models';
import { FormControlVM } from '../form-view-models';

export interface PatternVM {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly customerExtraInformations: CustomerExtraInformationVM[];
  readonly accountExtraInformations: AccountExtraInformationVM[];
  readonly formControls: FormControlVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface PatternCM {
  name: string;
  description: string;
}

export interface PatternUM {
  id: string;
  name: string;
  description: string;
}