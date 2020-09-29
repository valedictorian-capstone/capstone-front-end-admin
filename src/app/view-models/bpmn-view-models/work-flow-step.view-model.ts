import { PermissionVM } from '../basic-view-models';
import { FormGroupVM } from '../form-view-models';
import { WorkFlowConnectionVM } from './work-flow-connection.view-model';
import { WorkFlowStepInstanceVM } from './work-flow-step-instance.view-model';

export interface WorkFlowStepVM {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly subType: string;
  readonly workFlowId: string;
  readonly workFlowConnections: WorkFlowConnectionVM[];
  readonly workFlowStepInstanceVMs: WorkFlowStepInstanceVM[];
  readonly permissions: PermissionVM[];
  readonly formGroups: FormGroupVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface WorkFlowStepCM {
  name: string;
  description: string;
  type: string;
  subType: string;
  workFlowId: string;
}

export interface WorkFlowStepUM {
  id: string;
  name: string;
  description: string;
  type: string;
  subType: string;
  workFlowId: string;
}