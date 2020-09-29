import { AccountVM } from '../account-view-models';

export interface DepartmentVM {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly level: string;
  readonly parentId: string;
  readonly accounts: AccountVM[];
  readonly childrens: DepartmentVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface DepartmentCM {
  name: string;
  description: string;
  level: string;
  parentId: string;
}

export interface DepartmentUM {
  id: string;
  name: string;
  description: string;
  level: string;
  parentId: string;
}