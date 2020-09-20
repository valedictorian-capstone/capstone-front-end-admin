
import { FormControlVM } from '@view-models';

export class FormControlState {
  public readonly arr: FormControlVM[];
  constructor(props: FormControlState) {
    this.arr = props.arr;
  }
}