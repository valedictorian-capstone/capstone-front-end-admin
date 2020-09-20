export interface CommentVM {
  readonly Id: string;
  readonly AccountId: string;
  readonly WorkFlowStepInstanceId: string;
  readonly Value: string;
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface CommentCM {
  readonly AccountId: string;
  readonly WorkFlowStepInstanceId: string;
  readonly Value: string;
}

export interface CommentUM {
  readonly Id: string;
  readonly AccountId: string;
  readonly WorkFlowStepInstanceId: string;
  readonly Value: string;
}