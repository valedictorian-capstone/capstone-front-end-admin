import { FormGroupVM } from '@view-models';

export class FormGroupState {
  public readonly arr: FormGroupVM[];
  constructor(props: FormGroupState) {
    this.arr = props.arr;
  }
}