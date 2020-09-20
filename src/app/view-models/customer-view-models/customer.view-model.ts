import { CustomerExtraInformationVM } from './customer-extra-information.view-model';
import { CustomerExtraDataVM } from './customer-extra-data.view-model';
import { WorkFlowStepInstanceVM } from '../bpmn-view-models';
import { GroupVM } from '../basic-view-models';

export interface CustomerVM {
  readonly Id: string;
  readonly Phone: string;
  readonly Email: string;
  readonly Code: string;
  readonly Fullname: string;
  readonly Avatar: string;
  readonly Address: string;
  readonly Gender: string;
  readonly CustomerExtraInformations: CustomerExtraInformationVM[];
  readonly Groups: GroupVM[];
  readonly CustomerExtraDatas: CustomerExtraDataVM[];
  readonly WorkFlowStepInstances: WorkFlowStepInstanceVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface CustomerCM {
  readonly Phone: string;
  readonly Email: string;
  readonly Code: string;
  readonly Fullname: string;
  readonly Avatar: string;
  readonly Address: string;
  readonly Gender: string;
  readonly PasswordHash: string;
}

export interface CustomerUM {
  readonly Id: string;
  readonly Phone: string;
  readonly Email: string;
  readonly Code: string;
  readonly Fullname: string;
  readonly Avatar: string;
  readonly Address: string;
  readonly Gender: string;
  readonly PasswordHash: string;
}