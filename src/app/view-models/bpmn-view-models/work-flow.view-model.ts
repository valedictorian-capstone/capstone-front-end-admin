import { ConditionVM } from './condition.view-model';
import { WorkFlowInstanceVM } from './work-flow-instance.view-model';
import { WorkFlowStepVM } from './work-flow-step.view-model';

export interface WorkFlowVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Code: string;
  readonly Conditions: ConditionVM[];
  readonly WorkFlowStepVMs: WorkFlowStepVM[];
  readonly WorkFlowInstanceVMs: WorkFlowInstanceVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface WorkFlowCM {
  readonly Name: string;
  readonly Description: string;
  readonly Code: string;
}

export interface WorkFlowUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Code: string;
}