import { PatternVM } from '../basic-view-models';
import { FormValueVM } from './form-value.view-model';

export interface FormControlVM {
  readonly id: string;
  readonly name: string;
  readonly placeHolder: string;
  readonly fontSize: string;
  readonly label: string;
  readonly size: string;
  readonly options: { value: string, label: string }[] | any;
  readonly type: 'auto-complete' | 'input' | 'date-picker' | 'time-picker' | 'select' | 'multi-select' | 'text-area' | 'date-range' | 'radio' | 'check-box' | 'check-box-group' | 'file-upload' | 'switch' | 'rate' | 'slider';
  readonly subType: string;
  readonly position: number;
  readonly width: number;
  readonly xs: number;
  readonly sm: number;
  readonly md: number;
  readonly lg: number;
  readonly xl: number;
  readonly xxl: number;
  readonly height: string;
  readonly isCapitialize: boolean;
  readonly tooltip: string;
  readonly color: string;
  readonly patterns: PatternVM[];
  readonly formValues: FormValueVM[];
  readonly isDelete: boolean;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface FormControlCM {
  id: string;
  name: string;
  placeHolder: string;
  fontSize: string;
  label: string;
  size: string;
  options: { value: string, label: string }[] | any;
  type: 'auto-complete' | 'input' | 'date-picker' | 'time-picker' | 'select' | 'multi-select' | 'text-area' | 'date-range' | 'radio' | 'check-box' | 'check-box-group' | 'file-upload' | 'switch' | 'rate' | 'slider';
  subType: string;
  width: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  position: number;
  height: string;
  isCapitialize: boolean;
  tooltip: string;
  color: string;
  isDelete: boolean;
}

export interface FormControlUM {
  id: string;
  name: string;
  placeHolder: string;
  fontSize: string;
  label: string;
  size: string;
  options: { value: string, label: string }[] | any;
  type: 'auto-complete' | 'input' | 'date-picker' | 'time-picker' | 'select' | 'multi-select' | 'text-area' | 'date-range' | 'radio' | 'check-box' | 'check-box-group' | 'file-upload' | 'switch' | 'rate' | 'slider';
  subType: string;
  width: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  position: number;
  height: string;
  isCapitialize: boolean;
  tooltip: string;
  color: string;
  isDelete: boolean;
}