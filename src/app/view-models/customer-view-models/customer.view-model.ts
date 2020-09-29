import { CustomerExtraInformationVM } from './customer-extra-information.view-model';
import { CustomerExtraDataVM } from './customer-extra-data.view-model';
import { WorkFlowStepInstanceVM } from '../bpmn-view-models';
import { GroupVM } from '../basic-view-models';

export interface CustomerVM {
  readonly id: string;
  readonly phone: string;
  readonly email: string;
  readonly code: string;
  readonly fullname: string;
  readonly avatar: string;
  readonly address: string;
  readonly gender: string;
  readonly customerExtraInformations: CustomerExtraInformationVM[];
  readonly groups: GroupVM[];
  readonly customerExtraDatas: CustomerExtraDataVM[];
  readonly workFlowStepInstances: WorkFlowStepInstanceVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface CustomerCM {
  phone: string;
  email: string;
  code: string;
  fullname: string;
  avatar: string;
  address: string;
  gender: string;
  passwordHash: string;
}

export interface CustomerUM {
  id: string;
  phone: string;
  email: string;
  code: string;
  fullname: string;
  avatar: string;
  address: string;
  gender: string;
  passwordHash: string;
}