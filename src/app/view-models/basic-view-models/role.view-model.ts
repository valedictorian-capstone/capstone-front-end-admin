import { AccountVM } from '../account-view-models';
import { PermissionVM } from './permission.view-model';

export interface RoleVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Accounts: AccountVM[];
  readonly Permissions: PermissionVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface RoleCM {
  readonly Name: string;
  readonly Description: string;
}

export interface RoleUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
}