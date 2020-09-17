export class WorkFlowConnectionVM {
  public readonly Id!: string;
  public readonly Type!: string;
  public readonly Description!: string;
  public readonly FromWorkFlowStepId!: string;
  public readonly ToWorkFlowStepId!: string;
  public readonly IsDelete!: boolean;
  public readonly CreatedBy!: string;
  public readonly UpdatedBy!: string;
  public readonly CreatedAt!: Date;
  public readonly UpdatedAt!: Date;
}

export class WorkFlowConnectionCM {
  public readonly Type!: string;
  public readonly Description!: string;
  public readonly FromWorkFlowStepId!: string;
  public readonly ToWorkFlowStepId!: string;
}

export class WorkFlowConnectionUM {
  public readonly Id!: string;
  public readonly Type!: string;
  public readonly Description!: string;
  public readonly FromWorkFlowStepId!: string;
  public readonly ToWorkFlowStepId!: string;
}