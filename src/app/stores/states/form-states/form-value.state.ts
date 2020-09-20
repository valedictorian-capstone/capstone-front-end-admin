import { FormValueVM } from '@view-models';

export class FormValueState {
  public readonly arr: FormValueVM[];
  constructor(props: FormValueState) {
    this.arr = props.arr;
  }
}