export interface AccountExtraInformationDataVM {
  readonly id: string;
  readonly accountExtraInformationId: string;
  readonly accountExtraDataId: string;
  readonly value: string;
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface AccountExtraInformationDataCM {
  accountExtraInformationId: string;
  accountExtraDataId: string;
  value: string;
}

export interface AccountExtraInformationDataUM {
  id: string;
  accountExtraInformationId: string;
  accountExtraDataId: string;
  value: string;
}