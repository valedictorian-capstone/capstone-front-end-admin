import { CustomerExtraInformationVM } from '@view-models';

export class CustomerExtraInformationState {
  public readonly arr: CustomerExtraInformationVM[];
  constructor(props: CustomerExtraInformationState) {
    this.arr = props.arr;
  }
}