import { RolePermissionVM } from "../bpmn-view-models";
import { AccountRoleVM } from "./account-role.view-model";

export class RoleVM {
  public readonly Id!: string;
  public readonly Name!: string;
  public readonly Description!: string;
  public readonly AccountRoleVMs!: AccountRoleVM[];
  public readonly RolePermissionVMs!: RolePermissionVM[];
  public readonly IsDelete!: boolean;
  public readonly CreatedBy!: string;
  public readonly UpdatedBy!: string;
  public readonly CreatedAt!: Date;
  public readonly UpdatedAt!: Date;
}

export class RoleCM {
  public readonly Name!: string;
  public readonly Description!: string;
}

export class RoleUM {
  public readonly Id!: string;
  public readonly Name!: string;
  public readonly Description!: string;
}