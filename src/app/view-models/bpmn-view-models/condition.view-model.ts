import { WorkFlowVM } from './work-flow.view-model';

export interface ConditionVM {
  readonly Id: string;
  readonly Name: string;
  readonly Value: string;
  readonly WorkFlows: WorkFlowVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface ConditionCM {
  readonly Name: string;
  readonly Value: string;
}

export interface ConditionUM {
  readonly Id: string;
  readonly Name: string;
  readonly Value: string;
}