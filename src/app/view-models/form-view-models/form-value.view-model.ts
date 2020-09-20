export interface FormValueVM {
  readonly Id: string;
  readonly FormControlId: string;
  readonly FormDataId: string;
  readonly Value: string;
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface FormValueCM {
  readonly FormControlId: string;
  readonly FormDataId: string;
  readonly Value: string;
}

export interface FormValueUM {
  readonly Id: string;
  readonly FormControlId: string;
  readonly FormDataId: string;
  readonly Value: string;
}