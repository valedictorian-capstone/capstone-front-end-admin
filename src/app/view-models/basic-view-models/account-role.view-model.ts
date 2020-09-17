export class AccountRoleVM {
  public readonly Id!: string;
  public readonly AccountId!: string;
  public readonly RoleId!: string;
  public readonly IsDelete!: boolean;
  public readonly CreatedBy!: string;
  public readonly UpdatedBy!: string;
  public readonly CreatedAt!: Date;
  public readonly UpdatedAt!: Date;
}

export class AccountRoleCM {
  public readonly AccountId!: string;
  public readonly RoleId!: string;
}

export class AccountRoleUM {
  public readonly Id!: string;
  public readonly AccountId!: string;
  public readonly RoleId!: string;
}