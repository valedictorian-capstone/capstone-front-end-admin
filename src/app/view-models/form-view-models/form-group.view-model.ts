import { WorkFlowStepVM } from '../bpmn-view-models';
import { FormControlCM, FormControlUM, FormControlVM } from './form-control.view-model';
import { FormDataVM } from './form-data.view-model';

export interface FormGroupVM {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly description: string;
  readonly formControls: FormControlVM[];
  readonly formDatas: FormDataVM[];
  readonly workFlowSteps: WorkFlowStepVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface FormGroupCM {
  name: string;
  code: string;
  description: string;
  formControls: FormControlCM[];
}

export interface FormGroupUM {
  id: string;
  name: string;
  code: string;
  description: string;
  formControls: FormControlUM[];
}