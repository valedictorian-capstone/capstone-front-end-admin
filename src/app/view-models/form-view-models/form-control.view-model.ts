import { PatternVM } from '../basic-view-models';
import { FormValueVM } from './form-value.view-model';

export interface FormControlVM {
  readonly Id: string;
  readonly Name: string;
  readonly PlaceHolder: string;
  readonly FontSize: string;
  readonly Size: string;
  readonly Options: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Width: string;
  readonly Height: string;
  readonly IsCapitialize: string;
  readonly Tooltip: string;
  readonly Color: string;
  readonly Patterns: PatternVM[];
  readonly FormValues: FormValueVM[];
  readonly IsDelete: boolean;
  readonly CreatedBy: string;
  readonly UpdatedBy: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
}

export interface FormControlCM {
  readonly Name: string;
  readonly PlaceHolder: string;
  readonly FontSize: string;
  readonly Size: string;
  readonly Options: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Width: string;
  readonly Height: string;
  readonly IsCapitialize: string;
  readonly Tooltip: string;
  readonly Color: string;
}

export interface FormControlUM {
  readonly Id: string;
  readonly Name: string;
  readonly PlaceHolder: string;
  readonly FontSize: string;
  readonly Size: string;
  readonly Options: string;
  readonly Type: string;
  readonly SubType: string;
  readonly Width: string;
  readonly Height: string;
  readonly IsCapitialize: string;
  readonly Tooltip: string;
  readonly Color: string;
}