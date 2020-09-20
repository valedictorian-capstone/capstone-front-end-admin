import { FormValueVM } from './form-value.view-model';

export interface FormDataVM {
  readonly Id: string;
  readonly WorkFlowStepInstanceId: string;
  readonly FormGroupId: string;
  readonly FormValues: FormValueVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface FormDataCM {
  readonly WorkFlowStepInstanceId: string;
  readonly FormGroupId: string;
}

export interface FormDataUM {
  readonly Id: string;
  readonly WorkFlowStepInstanceId: string;
  readonly FormGroupId: string;
}