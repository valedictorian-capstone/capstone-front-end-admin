import { AccountExtraInformationDataVM } from '.';
import { DepartmentVM, RoleVM } from '../basic-view-models';
import { CommentVM, WorkFlowStepInstanceVM } from '../bpmn-view-models';

export interface AccountVM {
  readonly id: string;
  readonly phone: string;
  readonly email: string;
  readonly code: string;
  readonly fullname: string;
  readonly avatar: string;
  readonly address: string;
  readonly gender: string;
  readonly currentValidateCode: string;
  readonly roles: RoleVM[];
  readonly accountExtraInformationDatas: AccountExtraInformationDataVM[];
  readonly departments: DepartmentVM[];
  readonly comments: CommentVM[];
  readonly workFlowStepInstances: WorkFlowStepInstanceVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface AccountCM {
  phone: string;
  email: string;
  code: string;
  fullname: string;
  avatar: string;
  address: string;
  gender: string;
  password: string;
  currentValidateCode: string;
}

export interface AccountUM {
  id: string;
  phone: string;
  email: string;
  code: string;
  fullname: string;
  avatar: string;
  address: string;
  gender: string;
  password: string;
  currentValidateCode: string;
}