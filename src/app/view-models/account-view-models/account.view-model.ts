import { DepartmentVM, RoleVM } from '../basic-view-models';
import { CommentVM, WorkFlowStepInstanceVM } from '../bpmn-view-models';
import { AccountExtraDataVM } from './account-extra-data.view-model';
import { AccountExtraInformationVM } from './account-extra-information.view-model';

export interface AccountVM {
  readonly Id: string;
  readonly Phone: string;
  readonly Email: string;
  readonly Code: string;
  readonly Fullname: string;
  readonly Avatar: string;
  readonly Address: string;
  readonly Gender: string;
  readonly CurrentValidateCode: string;
  readonly Position: string;
  readonly Roles: RoleVM[];
  readonly AccountExtraInformations: AccountExtraInformationVM[];
  readonly AccountExtraDatas: AccountExtraDataVM[];
  readonly Departments: DepartmentVM[];
  readonly Comments: CommentVM[];
  readonly WorkFlowStepInstances: WorkFlowStepInstanceVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface AccountCM {
  readonly Phone: string;
  readonly Email: string;
  readonly Code: string;
  readonly Fullname: string;
  readonly Avatar: string;
  readonly Address: string;
  readonly Gender: string;
  readonly PasswordHash: string;
  readonly CurrentValidateCode: string;
  readonly Position: string;
}

export interface AccountUM {
  readonly Id: string;
  readonly Phone: string;
  readonly Email: string;
  readonly Code: string;
  readonly Fullname: string;
  readonly Avatar: string;
  readonly Address: string;
  readonly Gender: string;
  readonly PasswordHash: string;
  readonly CurrentValidateCode: string;
  readonly Position: string;
}