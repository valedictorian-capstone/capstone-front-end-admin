export interface WorkFlowConnectionVM {
  readonly Id: string;
  readonly Type: string;
  readonly Description: string;
  readonly FromWorkFlowStepId: string;
  readonly ToWorkFlowStepId: string;
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface WorkFlowConnectionCM {
  readonly Type: string;
  readonly Description: string;
  readonly FromWorkFlowStepId: string;
  readonly ToWorkFlowStepId: string;
}

export interface WorkFlowConnectionUM {
  readonly Id: string;
  readonly Type: string;
  readonly Description: string;
  readonly FromWorkFlowStepId: string;
  readonly ToWorkFlowStepId: string;
}