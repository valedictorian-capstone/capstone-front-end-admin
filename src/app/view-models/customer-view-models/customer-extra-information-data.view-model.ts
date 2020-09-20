export interface CustomerExtraInformationDataVM {
  readonly Id: string;
  readonly CustomerExtraInformationId: string;
  readonly CustomerExtraDataId: string;
  readonly Value: string;
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface CustomerExtraInformationDataCM {
  readonly CustomerExtraInformationId: string;
  readonly CustomerExtraDataId: string;
  readonly Value: string;
}

export interface CustomerExtraInformationDataUM {
  readonly Id: string;
  readonly CustomerExtraInformationId: string;
  readonly CustomerExtraDataId: string;
  readonly Value: string;
}