import { ConditionVM } from './condition.view-model';
import { WorkFlowInstanceVM } from './work-flow-instance.view-model';
import { WorkFlowStepVM } from './work-flow-step.view-model';

export interface WorkFlowVM {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly code: string;
  readonly conditions: ConditionVM[];
  readonly workFlowSteps: WorkFlowStepVM[];
  readonly workFlowInstances: WorkFlowInstanceVM[];
  readonly isDraft: boolean;
  readonly isdelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface WorkFlowCM {
  readonly name: string;
  readonly description: string;
  readonly code: string;
  readonly isDraft: boolean;
}

export interface WorkFlowUM {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly isDraft: boolean;
  readonly code: string;
}