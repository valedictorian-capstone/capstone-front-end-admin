import { AccountVM } from '../account-view-models';
import { CustomerVM } from '../customer-view-models';
import { FormDataVM } from '../form-view-models';
import { CommentVM } from './comment.view-model';

export interface WorkFlowStepInstanceVM {
  readonly id: string;
  readonly status: string;
  readonly note: string;
  readonly workFlowStepId: string;
  readonly workFlowInstanceId: string;
  readonly commentVMs: CommentVM[];
  readonly customers: CustomerVM[];
  readonly accounts: AccountVM[];
  readonly formDataVMs: FormDataVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface WorkFlowStepInstanceCM {
  status: string;
  note: string;
  workFlowStepId: string;
  workFlowInstanceId: string;
}

export interface WorkFlowStepInstanceUM {
  id: string;
  status: string;
  note: string;
  workFlowStepId: string;
  workFlowInstanceId: string;
}