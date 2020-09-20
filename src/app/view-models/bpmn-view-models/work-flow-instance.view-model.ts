import { WorkFlowStepInstanceVM } from './work-flow-step-instance.view-model';

export interface WorkFlowInstanceVM {
  readonly Id: string;
  readonly Code: string;
  readonly WorkFlowId: string;
  readonly Note: string;
  readonly WorkFlowStepInstanceVMs: WorkFlowStepInstanceVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface WorkFlowInstanceCM {
  readonly Code: string;
  readonly WorkFlowId: string;
  readonly Note: string;
}

export interface WorkFlowInstanceUM {
  readonly Id: string;
  readonly Code: string;
  readonly WorkFlowId: string;
  readonly Note: string;
}