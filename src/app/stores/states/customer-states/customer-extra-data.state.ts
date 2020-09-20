import { CustomerExtraDataVM } from '@view-models';

export class CustomerExtraDataState {
  public readonly arr: CustomerExtraDataVM[];
  constructor(props: CustomerExtraDataState) {
    this.arr = props.arr;
  }
}