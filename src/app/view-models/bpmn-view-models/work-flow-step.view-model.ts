import { PermissionVM } from '../basic-view-models';
import { FormGroupVM } from '../form-view-models';
import { WorkFlowConnectionVM } from './work-flow-connection.view-model';
import { WorkFlowStepInstanceVM } from './work-flow-step-instance.view-model';

export interface WorkFlowStepVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Type: string;
  readonly SubType: string;
  readonly WorkFlowId: string;
  readonly WorkFlowConnections: WorkFlowConnectionVM[];
  readonly WorkFlowStepInstanceVMs: WorkFlowStepInstanceVM[];
  readonly Permissions: PermissionVM[];
  readonly FormGroups: FormGroupVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface WorkFlowStepCM {
  readonly Name: string;
  readonly Description: string;
  readonly Type: string;
  readonly SubType: string;
  readonly WorkFlowId: string;
}

export interface WorkFlowStepUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Type: string;
  readonly SubType: string;
  readonly WorkFlowId: string;
}