export interface AccountExtraInformationDataVM {
  readonly Id: string;
  readonly AccountExtraInformationId: string;
  readonly AccountExtraDataId: string;
  readonly Value: string;
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface AccountExtraInformationDataCM {
  readonly AccountExtraInformationId: string;
  readonly AccountExtraDataId: string;
  readonly Value: string;
}

export interface AccountExtraInformationDataUM {
  readonly Id: string;
  readonly AccountExtraInformationId: string;
  readonly AccountExtraDataId: string;
  readonly Value: string;
}