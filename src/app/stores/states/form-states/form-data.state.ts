import { FormDataVM } from '@view-models';

export class FormDataState {
  public readonly arr: FormDataVM[];
  constructor(props: FormDataState) {
    this.arr = props.arr;
  }
}