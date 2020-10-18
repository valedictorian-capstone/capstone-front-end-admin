import { FormControlVM } from '../form-view-models';
import { ExtraInformationVM } from './extra-information.view-model';

export interface PatternVM {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly extraInformations: ExtraInformationVM[];
  readonly formControls: FormControlVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface PatternCM {
  name: string;
  description: string;
}

export interface PatternUM {
  id: string;
  name: string;
  description: string;
}