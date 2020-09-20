import { AccountVM } from '../account-view-models';
import { CustomerVM } from '../customer-view-models';
import { FormDataVM } from '../form-view-models';
import { CommentVM } from './comment.view-model';

export interface WorkFlowStepInstanceVM {
  readonly Id: string;
  readonly Status: string;
  readonly Note: string;
  readonly WorkFlowStepId: string;
  readonly WorkFlowInstanceId: string;
  readonly CommentVMs: CommentVM[];
  readonly Customers: CustomerVM[];
  readonly Accounts: AccountVM[];
  readonly FormDataVMs: FormDataVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface WorkFlowStepInstanceCM {
  readonly Status: string;
  readonly Note: string;
  readonly WorkFlowStepId: string;
  readonly WorkFlowInstanceId: string;
}

export interface WorkFlowStepInstanceUM {
  readonly Id: string;
  readonly Status: string;
  readonly Note: string;
  readonly WorkFlowStepId: string;
  readonly WorkFlowInstanceId: string;
}