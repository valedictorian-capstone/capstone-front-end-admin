import { WorkFlowStepVM } from '../bpmn-view-models';
import { FormControlVM } from './form-control.view-model';
import { FormDataVM } from './form-data.view-model';

export interface FormGroupVM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly FormControls: FormControlVM[];
  readonly FormDatas: FormDataVM[];
  readonly WorkFlowSteps: WorkFlowStepVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface FormGroupCM {
  readonly Name: string;
  readonly Description: string;
}

export interface FormGroupUM {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
}