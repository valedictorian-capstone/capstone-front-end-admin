import { GroupVM } from '../basic-view-models';
import { WorkFlowStepInstanceVM } from '../bpmn-view-models';
import { CustomerExtraInformationDataVM } from './customer-extra-information-data.view-model';

export interface CustomerVM {
  readonly id: string;
  readonly phone: string;
  readonly email: string;
  readonly code: string;
  readonly fullname: string;
  readonly avatar: string;
  readonly address: string;
  readonly gender: boolean;
  readonly customerExtraInformationDatas: CustomerExtraInformationDataVM[];
  readonly groups: GroupVM[];
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
  gender: boolean;
}

export interface CustomerUM {
  id: string;
  phone: string;
  email: string;
  code: string;
  fullname: string;
  avatar: string;
  address: string;
  gender: boolean;
}