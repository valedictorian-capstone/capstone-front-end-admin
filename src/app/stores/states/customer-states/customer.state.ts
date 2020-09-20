import { CustomerVM } from '@view-models';

export class CustomerState {
  public readonly arr: CustomerVM[];
  constructor(props: CustomerState) {
    this.arr = props.arr;
  }
}