import { AccountRoleVM } from './account-role.view-model';
import { AccountExtraInformationVM } from "./account-extra-information.view-model";
import { AccountExtraDataVM } from './account-extra-data.view-model';
import { AccountDepartmentVM } from './account-department.view-model';
import { CommentVM, AccountWorkFlowStepInstanceVM } from '../bpmn-view-models';

export class AccountVM {
  public readonly Id!: string;
  public readonly Phone!: string;
  public readonly Email!: string;
  public readonly Code!: string;
  public readonly Fullname!: string;
  public readonly Avatar!: string;
  public readonly Address!: string;
  public readonly Gender!: string;
  public readonly CurrentValidateCode!: string;
  public readonly Position!: string;
  public readonly AccountExtraInformationVMs!: AccountExtraInformationVM[];
  public readonly AccountRoleVMs!: AccountRoleVM[];
  public readonly AccountExtraDataVMs!: AccountExtraDataVM[];
  public readonly AccountDepartmentVMs!: AccountDepartmentVM[];
  public readonly AccountWorkFlowStepInstanceVMs!: AccountWorkFlowStepInstanceVM[];
  public readonly CommentVMs!: CommentVM[];
  public readonly IsDelete!: boolean;
  public readonly CreatedBy!: string;
  public readonly UpdatedBy!: string;
  public readonly CreatedAt!: Date;
  public readonly UpdatedAt!: Date;
}

export class AccountCM {
  public readonly Phone!: string;
  public readonly Email!: string;
  public readonly Code!: string;
  public readonly Fullname!: string;
  public readonly Avatar!: string;
  public readonly Address!: string;
  public readonly Gender!: string;
  public readonly PasswordHash!: string;
  public readonly CurrentValidateCode!: string;
  public readonly Position!: string;
}

export class AccountUM {
  public readonly Id!: string;
  public readonly Phone!: string;
  public readonly Email!: string;
  public readonly Code!: string;
  public readonly Fullname!: string;
  public readonly Avatar!: string;
  public readonly Address!: string;
  public readonly Gender!: string;
  public readonly PasswordHash!: string;
  public readonly CurrentValidateCode!: string;
  public readonly Position!: string;
}