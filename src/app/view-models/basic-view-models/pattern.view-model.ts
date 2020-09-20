import { AccountExtraInformationVM } from '../account-view-models';
import { CustomerExtraInformationVM } from '../customer-view-models';
import { FormControlVM } from '../form-view-models';

export interface PatternVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly CustomerExtraInformations: CustomerExtraInformationVM[];
  readonly AccountExtraInformations: AccountExtraInformationVM[];
  readonly FormControls: FormControlVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface PatternCM {
  readonly Name: string;
  readonly Description: string;
}

export interface PatternUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
}