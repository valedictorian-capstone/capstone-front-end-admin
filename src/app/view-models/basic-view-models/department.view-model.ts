import { AccountVM } from '../account-view-models';

export interface DepartmentVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Level: string;
  readonly ParentId: string;
  readonly Accounts: AccountVM[];
  readonly Childrens: DepartmentVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface DepartmentCM {
  readonly Name: string;
  readonly Description: string;
  readonly Level: string;
  readonly ParentId: string;
}

export interface DepartmentUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Level: string;
  readonly ParentId: string;
}