import { WorkFlowStepVM } from '../bpmn-view-models';
import { RoleVM } from './role.view-model';

export interface PermissionVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly WorkFlowSteps: WorkFlowStepVM[];
  readonly Roles: RoleVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface PermissionCM {
  readonly Name: string;
  readonly Description: string;
}

export interface PermissionUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
}